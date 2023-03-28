import "./Home.css";
import RegionSelect from "react-region-select";
import Video1 from "./sample_instagram_video.mp4";
import { Link } from "react-router-dom";

function Home(props) {
  const { regions, setRegions } = props;
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
    <>
      <li>
        <Link to="/SelectedRegion" state={{ regions: regions }}>
          Show Selected Region
        </Link>
      </li>
      <div onClick={(e) => e.stopPropagation()}>
        <RegionSelect
          maxRegions={2}
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
    </>
  );
}

export default Home;
