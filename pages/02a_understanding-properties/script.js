import gsap from "gsap";
// import gsap from "gsap/gsap-core";

gsap.to(".box", {
  x: -200,
  //   y: -200,
  opacity: 1,
  rotation: 360,
  background: "#ff6f61",
  borderRadius: "50%",
  //   scale: 1.25,
  scaleX: 1.25,

  //   only gsap properties
  duration: 2,
  //   delay: .5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  //   repeatDelay: 2,
  //   paused: true,
  //   stagger: 1,
});
