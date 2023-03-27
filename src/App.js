import "./App.css";
import RegionSelect from "react-region-select";
import { useState } from "react";
import Video1 from "./sample_instagram_video.mp4";

function App() {
  const [regions, setRegions] = useState([]);
  const handleChange = (regions) => {
    setRegions(regions);
  };

  const actionDeleteRegion = (regionIdx) => {
    const filteredRegion = regions.filter(
      (reg) => reg.data.index !== regionIdx
    );
    setRegions(filteredRegion);
  };

  const regionRenderer = (regionProps) => {
    if (!regionProps.isChanging) {
      return (
        <div>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "-25px",
              zIndex: "99999999",
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                actionDeleteRegion(regionProps.data.index);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={(e) => e.stopPropagation()}>
          <RegionSelect
            constraint
            regionStyle={{
              backgroundColor: "blue",
              position: "absolute",
            }}
            regions={regions}
            onChange={handleChange}
            regionRenderer={regionRenderer}
          >
            <video src={Video1} height="350px" width="350px" autoPlay />
          </RegionSelect>
        </div>
      </header>
    </div>
  );
}

export default App;
