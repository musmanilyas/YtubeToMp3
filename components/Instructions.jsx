const Instruction = () => {
  return (
    <div>
      <p style={{ fontSize: "30px" }} className="center-text">
        YouTube To MP3
      </p>
      <p>
        YouTube.com is the largest video sharing platform on the Internet. Every
        day millions of new videos are added. You can find all kinds of videos
        but YouTube does not offer a FREE downloading service for these videos.
      </p>
      <p>
        YTMP3 allows you to download your favorite YouTube videos as MP3 (audio)
        or MP4 (video) files in the most efficient way. You are able to use
        YTMP3 on any device – it is optimized to work on desktop, tablet and
        mobile devices. There is also no additional software or app needed.
      </p>
      <p className="center-text">How to convert & download YouTube videos?</p>
      <ol>
        <li>
          Open YouTube.com and search for the video you would like to download.
        </li>
        <li>
          Click on the video and wait until it starts playing. Copy the video
          URL from your browser address bar.
        </li>
        <li>
          Open YTMP3 and paste the video URL in the converter. Choose the
          download format MP3 .
        </li>
        <li>
          If no format is chosen, the video will be converted to MP3 by default.
        </li>
        <li>
          Click on the "Convert" button. The conversion may take a few minutes,
          and it depends on the size of the video.
        </li>
        <li>
          Once the conversion is completed, a "Download" button will appear.
          Click on it to start the download.
        </li>
      </ol>
      <br></br>
    </div>
  );
};

export default Instruction;
