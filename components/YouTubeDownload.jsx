// const handleDownload = async () => {
//   try {
//     const options = {
//       // Defines options for request

//       responseType: "blob",
//       // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)

//       onDownloadProgress: function (progressEvent) {
//         // Function fires when there is download progress

//         console.log(
//           progressEvent,
//           Math.floor(progressEvent.loaded / progressEvent.total)
//         );
//         // Logs percentage complete to the console
//       },
//     };
//     let fileName = "fileName.mp3";
//     const response = await axios
//       .get(`/api/getMp3?url=${videoUrl}`, options)
//       .then((res) => {
//         console.log(
//           "All DONE: ",
//           res.headers["content-disposition"].split("=")[1]
//         );
//         fileName = res.headers["content-disposition"].split("=")[1];
//         return res.data;
//       });

//     const url = window.URL.createObjectURL(response);
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", fileName);

//     // Append to html link element page
//     document.body.appendChild(link);

//     // Start download
//     link.click();

//     // Clean up and remove the link
//     link.parentNode.removeChild(link);
//     // onDownload({ url: data });
//   } catch (error) {
//     console.error("Error downloading video:", error);
//   }
// };

//   return (
//     <div>
//       <input
//         type="text"
//         value={videoUrl}
//         onChange={(e) => setVideoUrl(e.target.value)}
//         placeholder="Enter YouTube video URL"
//       />
//       <button onClick={handleDownload}>Download Audio</button>
//     </div>
//   );
// };

// export default YouTubeDownload;

import React, { useState } from "react";
import axios from "axios";
import AudioPlayer from "./AudioPlayer";
const YouTubeDownload = () => {
  const [videoLink, setVideoLink] = useState("");
  const [audioFile, setAudioFile] = useState();
  const [fileName, setFileName] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(false);
  // const convertToMp3 = async () => {
  //   try {
  //     setIsLoading(true);

  //     setAudioFile("");
  //     const response = await axios.post(
  //       "http://localhost:3001/convert",
  //       { videoLink },
  //       { responseType: "blob" }
  //     );

  //     // Create a blob URL for the response data
  //     const blob = new Blob([response.data], { type: "audio/mp3" });
  //     const url = URL.createObjectURL(blob);

  //     console.log("url", url);
  //     setAudioFile(url);
  //   } catch (error) {
  //     console.error("Error converting video to MP3:", error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  function updateProgressBar(percentage) {
    // Implement the logic to update a progress bar based on the percentage
    setLoadingMessage(
      !percentage ? "Converting..." : `Progress: ${percentage}%`
    );
  }
  const convertToMp3 = async () => {
    try {
      setIsLoading(true);
      setAudioFile("");
      console.log("callled");
      const options = {
        // Defines options for request

        responseType: "blob",
        // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)

        onDownloadProgress: function (progressEvent) {
          // Check if lengthComputable is false or total is not available
          if (
            !progressEvent.lengthComputable ||
            progressEvent.total === undefined
          ) {
            console.log("progressEvent----<", progressEvent);
            updateProgressBar();
          } else {
            console.log("progressEvent----< total", progressEvent);
            // Handle the case when total size is available (percentage calculation)
            const percentage =
              (progressEvent.loaded / progressEvent.total) * 100;
            updateProgressBar(percentage);
          }
        },
      };
      let fileName = "fileName.mp3";
      const response = await axios
        .get(`/api/getMp3?url=${videoLink}`, options)
        .then((res) => {
          console.log(
            "All DONE: ",
            res.headers["content-disposition"].split("=")[1]
          );
          fileName = res.headers["content-disposition"].split("=")[1];
          return res.data;
        });

      const url = window.URL.createObjectURL(response);
      setAudioFile(url);
      setFileName(fileName);
      // const link = document.createElement("a");
      // link.href = url;
      // link.setAttribute("download", fileName);

      // // Append to html link element page
      // document.body.appendChild(link);

      // // Start download
      // link.click();

      // Clean up and remove the link
      // onDownload({ url: data });
    } catch (error) {
      console.log(error);
      alert("Try again! Error converting video to MP3:", error.message);

      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = audioFile;
    link.download =
      fileName ?? "audio" + Math.floor(Math.random() * 1000) + ".mp3";
    link.click();
    link?.parentNode?.removeChild(link);
  };
  return (
    <div>
      <p style={{ color: "grey" }}>Please insert a valid YouTube video URL</p>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Enter YouTube video link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="search-bar"
          style={{ flex: 10 }}
        />

        <button
          className={isLoading ? "search-button-disabled" : "search-button"}
          onClick={convertToMp3}
          disabled={isLoading}
        >
          {!isLoading ? "Convert" : loadingMessage}
        </button>
      </div>
      <br></br>

      <br></br>
      <div style={{ display: "flex" }}>
        {audioFile && (
          <div style={{ flex: 10 }}>
            <AudioPlayer audioFile={audioFile}></AudioPlayer>
          </div>
        )}
        {audioFile && (
          <button className="download-button" onClick={handleDownload}>
            Download
          </button>
        )}
      </div>
    </div>
  );
};

export default YouTubeDownload;
