import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Video = () => {

  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.to(videoRef.current, { display: "block", delay: 3 });
  }, []);
  return (
    <video
      autoPlay
      muted
      ref={videoRef}
      loop
      className="hidden w-full h-full object-cover"
      src="/videos/heroVideo.mp4"
    ></video>
  );
};

export default Video;
