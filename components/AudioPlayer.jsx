import React, { useState, useEffect } from "react";

const AudioPlayer = ({ audioFile }) => {
  const [audio, setAudio] = useState(new Audio());

  useEffect(() => {
    audio.src = new Audio(audioFile);
  }, [audioFile]);

  const handlePlay = () => {
    audio.play();
  };

  const handlePause = () => {
    audio.pause();
  };

  return (
    <>
      <audio controls style={{ width: "100%" }}>
        <button
          style={{ border: "20px", borderRadius: "20px" }}
          onClick={() => {}}
        />
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default AudioPlayer;
