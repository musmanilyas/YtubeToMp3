import { useState } from "react";
import AudioPlayer from "react-audio-player";
import YouTubeDownload from "../components/YouTubeDownload";
import ProgressBar from "../components/ProgressBar";
import Instruction from "../components/Instructions";

export default function Home() {
  const [audioUrl, setAudioUrl] = useState(null);

  const handleDownload = (info) => {
    setAudioUrl(info.url);
  };

  return (
    <div className="main">
      <div className="centered-div">
        <YouTubeDownload onDownload={handleDownload} />
        {audioUrl && <AudioPlayer src={audioUrl} controls />}
        {audioUrl && <ProgressBar url={audioUrl} />}
      </div>
      <Instruction></Instruction>
    </div>
  );
}
