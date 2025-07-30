var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.1,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line-text", {
  opacity: 0,
  onStart: function () {
    
    var h5 = document.querySelector("#line-text h5");

    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        grow++;
        h5.innerHTML = grow;
        console.log(grow);
      } else {
        // grow = 100;
        console.log(grow);
      }
    }, 30);
  },
});

tl.from(".line h2", {
  opacity: 0,
  y: 200
  
})

// tl.to("#loader", {
//   opacity: 0,
//   duration: 0.2,
//   delay: 4,
// });

tl.from("#page1", {
    delay: 0,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease:Power4,

})

// tl.from("#loader",{
//    display: none
// })
