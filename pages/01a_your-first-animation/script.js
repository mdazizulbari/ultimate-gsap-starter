gsap.to(".card", {
  opacity: 1,
  scale: 1,
  x: 100,
  duration: 1,
  onComplete: () => {
    gsap.to(".card", {
      y: 100,
      x: -100,
      repeat: -1,
      yoyo: true,
      duration: 0.3,
    });
  },
});
