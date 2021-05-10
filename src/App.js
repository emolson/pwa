import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import logo from "./marius.png";
import gif1 from "./images/dance.gif";
import gif2 from "./images/dance1.gif";
import gif3 from "./images/dance2.gif";
import gif4 from "./images/dance3.gif";
import background from "./images/background.gif";
import "./App.css";

function App() {
  const [isPlaying, setPlaying] = useState(false);
  const [isDancing, setDancing] = useState(false);
  const [isFlashing, setFlashing] = useState(false);
  const [hasStopped, setHasStopped] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      setDancing(false);
      setFlashing(false);
    } else {
      if (hasStopped) {
        setDancing(true);
        setFlashing(true);
      } else {
        const timeOutId = setTimeout(() => setDancing(true), 6200);
        const timeOutId2 = setTimeout(() => setFlashing(true), 26200);
        return () => {
          clearTimeout(timeOutId);
          clearTimeout(timeOutId2);
        };
      }
    }
  }, [isPlaying, hasStopped]);

  const displayWhenIsPlaying = isPlaying ? "flex" : "none";
  const invisibleWhenIsPlaying = isPlaying ? "none" : "flex";
  const displayWhenIsDancing = isDancing ? "flex" : "none";

  const backgroundStyle = isFlashing
    ? { backgroundImage: `url(${background})` }
    : {};

  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}>
        <button
          style={{ display: invisibleWhenIsPlaying }}
          onClick={() => setPlaying(true)}
        >
          Begin
        </button>
        <button
          style={{ display: displayWhenIsPlaying }}
          onClick={() => {
            setPlaying(false);
            setHasStopped(true);
          }}
        >
          Stop this is too much for me right now
        </button>

        <img
          style={{ display: displayWhenIsPlaying }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <div>
          <ReactPlayer
            style={{ display: "none" }}
            playing={isPlaying}
            url="https://www.youtube.com/watch?v=p44G0U4sLCE"
          />
        </div>
      </header>
      <img
        style={{
          display: displayWhenIsDancing,
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
        height={"180"}
        src={gif1}
        alt={"dance"}
      />
      <img
        style={{
          display: displayWhenIsDancing,
          position: "fixed",
          bottom: 0,
          right: 0,
        }}
        height={"180"}
        src={gif2}
        alt={"dance"}
      />
      <img
        style={{
          display: displayWhenIsDancing,
          position: "fixed",
          top: 0,
          left: 0,
        }}
        height={"180"}
        src={gif3}
        alt={"dance"}
      />
      <img
        style={{
          display: displayWhenIsDancing,
          position: "fixed",
          top: 0,
          right: 0,
        }}
        height={"180"}
        src={gif4}
        alt={"dance"}
      />
    </div>
  );
}

export default App;
