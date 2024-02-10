import ytdl from "ytdl-core";
import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const info = await ytdl.getInfo(url.toString());
    const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
    const audioUrl = audioFormats[0].url; // Assuming we take the first audio format

    // Set appropriate headers
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${info.videoDetails.title}.mp3"`
    );
    res.setHeader("Content-Type", "audio/mpeg");

    // Stream the audio in chunks
    ytdl(url.toString(), {
      format: "mp3",
      quality: "highestaudio",
    }).pipe(res);
  } catch (error) {
    console.error("Error downloading video:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router.handler();
