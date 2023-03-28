import React from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import Video1 from "./sample_instagram_video.mp4";

function SelectedRegion(props) {
  const { regions } = useLocation().state;
  console.log("reg:", regions);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div style={{ position: "relative", display: "inline - block" }}>
        {regions?.map((reg) => (
          <div
            style={{
              backgroundColor: "blue",
              position: "absolute",
              left: `${reg.x}%`,
              top: `${reg.y}%`,
              width: `${reg.width}%`,
              height: `${reg.height}%`,
              zIndex: "300000",
            }}
            onClick={() => console.log("region clicked:", reg)}
          ></div>
        ))}
        <video src={Video1} height="350px" width="350px" autoPlay />
      </div>
    </div>
  );
}

export default SelectedRegion;
