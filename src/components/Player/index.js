import React, { useState, useEffect } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import YouTube from "react-youtube";

import { PlayerMusic } from "./styles";
//https://youtu.be/aRYlA2HJwpw

const Player = () => {
  const [player, setPlayer] = useState("");
  const [status, setStatus] = useState(false);

  const onReady = (event) => {
    setPlayer(event.target);
  };
  const onPlayMusic = async () => {
    await player.playVideo();
    player.setPlaybackQuality("small");
    setStatus(true);
  };

  const onPauseMusic = async () => {
    await player.pauseVideo();
    setStatus(false);
  };
  const endMuscic = async () => {
    onPlayMusic();
  };
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      loop: 1,
    },
  };
  return (
    <PlayerMusic>
      <YouTube
        videoId="kIEJJiUMGVU"
        opts={opts}
        onReady={onReady}
        onEnd={endMuscic}
      ></YouTube>
      {!status && (
        <button type="button" onClick={onPlayMusic} autoFocus={true}>
          <AiFillPlayCircle size={25} color="#d2df36"></AiFillPlayCircle>
        </button>
      )}{" "}
      {status && (
        <button type="button" onClick={onPauseMusic}>
          <AiFillPauseCircle size={25} color="#d2df36"></AiFillPauseCircle>
        </button>
      )}
      <text>OUÇA AGORA</text>
    </PlayerMusic>
  );
};

export default Player;
