gsap.to("#page2 img", {
    width: "100%",
    scrollTrigger: {
        trigger: "#page2",
        scroll: "body",
         markers: true,
         start: "top 0",
         end: "top -100%",
         scrub: 3,
         pin: true,
    }
})