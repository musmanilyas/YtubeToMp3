import React, { useState, useEffect } from "react";

const ProgressBar = ({ url }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const eventSource = new EventSource("/api/getMp3?url=" + url);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setProgress(data.progress);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "blue",
          color: "white",
          padding: "5px",
          textAlign: "center",
        }}
      >
        {progress}% Complete
      </div>
    </div>
  );
};

export default ProgressBar;
