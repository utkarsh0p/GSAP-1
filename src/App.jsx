import "./App.css";
import backgroundImage from "./assets/bg.png";
import skyImage from "./assets/sky.png";
import myImage from "./assets/utkarsh.webp";
import Dropdown from "./components/dropdown";
import Projects from "./components/Projects";
import Follower from "./components/follower";
import Video from "./assets/video.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  // gsap styling for the page here
  useGSAP(() => {
    const main = document.querySelector(".main-box");
    const followerBox = document.querySelector(".follower-box");
    followerBox.addEventListener("mousemove", (event) => {
      gsap.to(".follower", {
        x: event.clientX,
        y: event.clientY,
        duration: 2.5,
        ease: "expo.out",
      });
    });

    followerBox.addEventListener("mouseenter", () => {
      gsap.to(".follower", {
        ease: "power4.out",
        scale: 1.5,
        duration: 0.7,
      });
    });
    followerBox.addEventListener("mouseleave", () => {
      gsap.to(".follower", {
        ease: "power4.out",
        scale: 0,
        duration: 0.7,
      });
    });

    gsap.to(".rotation-animation", {
      scale: 1,
      rotate: 0,
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
    });
    gsap.from(".sky-image", {
      scale: 1.7,
      x: 100,
      duration: 10,
    });

    gsap.to(".background-image", {
      scale: 1,
      rotate: 0,
      duration: 1.5,
    });
    main.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerWidth - 0.5) * 140;
      const xMoveImage = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMoveImage = (e.clientY / window.innerWidth - 0.5) * 40;

      gsap.to(".background-image", {
        x: xMove,
        duration: 0.1,
      });
      gsap.to(".sky-image", {
        y: yMove,
        duration: 0.1,
      });
      gsap.to(".my-image", {
        x: -xMoveImage,
        y: -yMoveImage,
        duration: 0.1,
      });
    });
  }, []);

  return (
    <>
      <div className="follower-box smoke-border relative w-screen z-100 h-[100vh] overflow-hidden main-box sm:top-0">
        {/* this is follower */}
        <Follower className="follower" />

        <div className=" text-white font-mainfont flex justify-between items-center text-[40px] h-[10vh] w-full absolute top-0 left-0 z-5 pl-3 pr-3 sm:top-0">
          <Dropdown></Dropdown>
          <span>Utkarsh</span> <Projects />{" "}
        </div>

        <div className="overflow-x-hidden w-full h-full absolute top-0 left-0 z-1">
          <img
            className="sky-image absolute top-0 left-0 w-full object-cover h-full"
            src={skyImage}
            alt="not-found"
          />
        </div>

        <div className="overflow-x-hidden w-full h-full absolute top-[-40px] left-0 sm:top-0 z-2">
          <img
            className=" rotate-[20deg] scale-[1.9] background-image absolute top-0 left-0 w-[100%] object-cover h-[100%]"
            src={backgroundImage}
            alt="image-not-loaded"
          />
        </div>

        <img
          className=" overflow-visible rotation-animation my-image rotate-[-20deg] scale-[3] absolute object-cover z-5 bottom-[-300px] left-0 w-[100vh] h-[100vh] sm:top-1/2 sm:left-[53%] sm:scale[1.5]"
          src={myImage}
          alt="image-not-loaded"
        />
      </div>

      <div className="relative z-10 fading-border h-[70vh] w-screen bg-blue-500 sm:flex sm:flex-row sm:justify-between sm:h-[80vh] sm:items-center">
        <video
          src={Video}
          autoPlay
          loop
          muted
          className=" hidden sm:block sm:h-[80vh] "
        ></video>
        <div className="flex flex-col h-full sm:rounded-l-full sm:h-[500px] justify-center items-center bg-amber-500">
          <div className="w-full flex items-center justify-center flex-col pb-10">
            <h1 className="font-mainfont text-3xl">ABOUT ME</h1>
            <h2 className="font-mainfont text-xl pt-5">
              "Just Another Curious Mind on the Web"
            </h2>
          </div>
          <div>
            <p className="pl-[40px]">
              Hey, I’m Utkarsh — a passionate full-stack developer who loves
              building clean, interactive, and human-friendly digital
              experiences. Whether it’s breathing life into a UI with React or
              diving deep into backend logic, I thrive on solving problems and
              crafting stuff people actually enjoy using. Always learning,
              always shipping. Let’s build something awesome together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
