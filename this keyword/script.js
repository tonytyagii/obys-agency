// console.log(this)    // global scope // ans window

// function abcd () {   // function scope // ans window
//     console.log(this)  
// }

// abcd();

// var obj = {    // method // ans obj same like method
//     name: function() {
//         console.log(this)
//     },
//     age: 25,
//     email: 'tony@yahoo.com',

// }

// obj.name()

// var obj = {          // es5 type function inside method // ans window
//     sayName: function() {
//         function abcd() {
//             console.log(this)
//         }
//         abcd()
//     }
// }

// obj.sayName();

// var obj3 = {        // es6 type arrow function inside method // ans object
//     sayName: function() {
//         const child = () => {
//             console.log(this)
//         }
//         child();
//     }
// }

// obj3.sayName();


// function add() {    // constructor function // ans new blank object
//     console.log(this);
// }

// const ans = new add();



// document.querySelector("button").addEventListener("click", function() {      //ans jispr eventlistner lga h vhi 
//     console.log(this)
// })



// //  call apply and bind   // use to control the value of this when calling a function

// const obj5 = {name: 'Tony'}

// function sayName (a, b, c) {
//     console.group(this, a, b, c);
// }

// sayName.apply(obj5, [1, 2 , 3])

// const sayName2 = sayName.bind(obj5)

// sayName();


// what's constructor function 
// construction function is special fnc that's use to create and initilize objects when we want to create multiple objects with same properties and methods this is useful when you want to create multiple objects with same structure but different values 



// prototype inheritance ans ->> when we inheriate properties and methods from other object it's called prototype inheritance

// function makeHuman(name, age) {
//     this.name = name;
//     this.age = age;
// }

// makeHuman.prototype.printMyName = function() {
//     console.log(this.name);
// }

// const human1 = new makeHuman('harsh', 25);
// const human2 = new makeHuman('harshita', 34);


// clousers  ans >> aisa koi bhi fnc jo ek aur fnc ko return karde aur apne parent fnc ka variable use kare 

// function counter() {
//     var count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }

// var fnc = counter();

// fnc();
// fnc();
// fnc();


// event delegation  >> ans jab aap event listerne se kai saare different elements ke events ko handle kar sake 


// var parent  = document.querySelector("#parent");

// parent.addEventListener("click", function(e) {
//       console.log(e)
// })



// higher order function >> ans a function that takes one or more function as an argument or return another function as a results


// try and catch error handling like pro 

// function divide (a, b) {
//       try {
//            if(b == 0) {
//             throw Error("koi gadbad hui");
//            } 
//            console.log(a/b)
//       } catch (err) {
//              console.log("caught an error:", err.message)
//       }
// }

// divide(12, 0);

// custom events  >> 

const evt = new Event("chacha");

document.querySelector("button").addEventListener("chacha" , function(){
      alert("chacha event hua");
})

document.querySelector("button").dispatchEvent(evt)

