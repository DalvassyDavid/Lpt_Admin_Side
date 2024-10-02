import axios from "axios";
import "../App.css";
import { Graph, ProgressStyle, progressStyle } from "../Reusables/Functions";
import { useEffect, useState } from "react";

function Statistics() {
  const [numberofmembers, setnumberofmembers] = useState("0");
  const [targets, setTargets] = useState({
    memberstarget: 100,
    allevents: 100,
    allservices: 100,
    youtubevideos: 100,
    followers: 100,
  });
 

  useEffect(() => {
    axios
      .get(`http://localhost:8000/members`)
      .then((res) => setnumberofmembers(res.data.length));
  }, [numberofmembers]);
  return (
    <div>
      <div className="statistics-page">
        <div className="statistics-page-numbers">
          <div className="statistics-page-numbers-members">
            <span className="statistics-page-numbers-values-lables">
              {" "}
              MEMBERS
            </span>
            <div style={{ display: "flex" }}>
              <div className="statistics-page-numbers-values-width">
                {numberofmembers}
              </div>
              <div>
                <ProgressStyle
                  progresscolor={"orange "+`${numberofmembers/targets.memberstarget*100}%`}
                  progresspercentage={numberofmembers/targets.memberstarget*100+"%"}
                />
              </div>
            </div>
          </div>
          <div className="statistics-page-numbers-events">
            <span className="statistics-page-numbers-values-lables">
              {" "}
              ACTIVE EVENTS
            </span>
            <div style={{ display: "flex" }}>
              <div className="statistics-page-numbers-values-width">42</div>
              <div>
                <ProgressStyle
                  progresscolor="blue 40%"
                  progresspercentage="40%"
                />
              </div>
            </div>
          </div>
          <div className="statistics-page-numbers-services">
            <span className="statistics-page-numbers-values-lables">
              {" "}
              ACTIVE SERVICES
            </span>
            <div style={{ display: "flex" }}>
              <div className="statistics-page-numbers-values-width">101</div>
              <div>
                <ProgressStyle
                  progresscolor="rgb(0, 255, 0) 46%"
                  progresspercentage="46"
                />
              </div>
            </div>
          </div>
          <div className="statistics-page-numbers-youtube">
            <span className="statistics-page-numbers-values-lables">
              {" "}
              YOUTUBE VIDEOS
            </span>
            <div style={{ display: "flex" }}>
              <div className="statistics-page-numbers-values-width">202</div>
              <div>
                <ProgressStyle
                  progresscolor="red 90%"
                  progresspercentage="90%"
                />
              </div>
            </div>
          </div>
          <div className="statistics-page-numbers-following">
            <span className="statistics-page-numbers-values-lables">
              {" "}
              FOLLOWERS
            </span>
            <div style={{ display: "flex" }}>
              <div className="statistics-page-numbers-values-width">399</div>
              <div className="statistics-page-numbers-values-progress">
                <ProgressStyle
                  progresscolor="gold 30%"
                  progresspercentage="30%"
                />
              </div>
            </div>
          </div>
        </div>
        <Graph />
      </div>
    </div>
  );
}

export default Statistics;
