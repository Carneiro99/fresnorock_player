import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillShopping,
} from "react-icons/ai";
import TextDesciption from "../components/Description";
import Player from "../components/Player";
import { Container } from "./styles";
import bgVideos from "../assets/bgvideo.mp4";
//        <source src={bgVideos}></source>

function Home() {
  return (
    <Container>
      <div>
        <TextDesciption></TextDesciption>
        <Player></Player>
      </div>

      <video className="video" autoPlay muted loop>
        <source src={bgVideos}></source>
      </video>
      <div>
        <a
          type="buttons"
          href={"https://www.youtube.com/user/fresnorock/featured"}
        >
          <AiFillYoutube size={25} color="#d2df36"></AiFillYoutube>
        </a>
        <a type="buttons" href={"https://www.instagram.com/fresnorock/"}>
          <AiFillInstagram size={25} color="#d2df36"></AiFillInstagram>
        </a>
        <a href={"https://twitter.com/fresnorock"}>
          <AiOutlineTwitter size={25} color="#d2df36"></AiOutlineTwitter>
        </a>
        <a type="buttons" href={"https://www.fresnoshop.com.br/"}>
          <AiFillShopping size={25} color="#d2df36"></AiFillShopping>
        </a>
      </div>
    </Container>
  );
}

export default Home;
