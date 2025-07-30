// function textSplitting() {
//   const Allh1 = document.querySelectorAll("#page2 h1");

//   console.log(Allh1);

//   Allh1.forEach(function (e) {
//     var clutter = "";
//     // console.log(e);
//     var allH1Text = e.textContent;
//     //    console.log(allH1Text)
//     var splittedText = allH1Text.split("");
//     console.log(splittedText);
//     splittedText.forEach(function (e) {
//       clutter += `<span>${e}</span>`;
//     });

//     e.innerHTML = clutter;
//     console.log(e);
//   });
// }

// textSplitting();

// function gsapAnimation() {
//   gsap.to("#page2 h1 span", {
//     color: "#E3E3C4",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: "#page2 h1",
//       scroller: "body",
//       markers: true,
//       start: "top 40%",
//       end: "top -10%",
//       scrub: 2,
//     },
//   });
// }
// gsapAnimation();

//  select only one h1

// const h1Text = document.querySelector("#h1").textContent;

// const splittedText = h1Text.split("");

// console.log(splittedText);

// var clutter = "";
// splittedText.forEach(function (e) {
//   clutter += `<span>${e}</span>`;
// });

// document.querySelector("#h1").innerHTML = clutter;

// console.log(clutter);

// gsap.to("#page2 h1 span", {
//     color: "#E3E3C4",
//     stagger: 0.1,
//     scrollTrigger:{
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "top 10%",
//         scrub: 1

//     }
// })

var h1 = document.querySelectorAll("#page2 h1");

// console.log(h1);

h1.forEach(function(e) {
  var h1Text = e.textContent;
  // console.log(h1Text);

  var splittedText = h1Text.split("");
  console.log(splittedText);


   var clutter = "";
  splittedText.forEach(function(e) {
        clutter += `<span>${e}</span>`
        console.log(clutter)
  })

  e.innerHTML = clutter;

})


function gsapScroll() {
  gsap.to("#page2 h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      start: "top 50%",
      end: "top -10%",
    },
  
  });
}

gsapScroll();


 function locoScroll () {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

locoScroll.on("scroll", ScrollTrigger.update);
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

 }

 locoScroll()
