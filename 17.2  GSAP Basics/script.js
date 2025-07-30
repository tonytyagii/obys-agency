// Gsap Basics 

// gsap.to("#box", {
//     x: 1000,
//     duration: 2,
//     delay: 2,
//     backgroundColor: "blue",

// })

// gsap.from("#box", {
//     x: 1000,
//     duration: 2,
//     delay: 2,
//     backgroundColor: "blue",

// })



// Gsap Timeline 

// var t1 = gsap.timeline();

// t1.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 2,
//     scale: 0.5,
//     backgroundColor: "blue",
// })
// t1.to("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 2,
//     scale: 0.5,
//     backgroundColor: "blue",
// })
// t1.to("#box3", {
//     x: 1000,
//     duration: 2,
//     delay: 2,
//     scale: 0.5,
//     backgroundColor: "blue",
// })


//  GSAP Project



var t1 = gsap.timeline();

t1.from("h3", {
    y: -50,
    duration: 0.5,
    delay: 0.1,
    opacity: 0,
    stagger: 0.3,
})

t1.from("#main h1", {
    x: -500,
    opacity: 0,
    duration:1,
    delay: 0.3,
    stagger: 0.5,
})

t1.from("img", {
    x: 100,
    opacity: 0,
    duration: 0.2,
    rotate: 45,
    stagger:  0.5,
})







