// JS PRACICE PART 2

// const form = document.querySelector("form");
// const inp1 = document.querySelector("#inp1");
// const inp2 = document.querySelector("#inp2");
// const h2 = document.querySelector("h2");

// form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       if(inp1.value === '' || inp2.value === ''){
//             console.log("blank");
//            h2.textContent = "Some fields are blank";
//            h2.style.color = 'red'
//       }

//       else{
//              h2.textContent = "";

//       }
// })

// JS PRACICE PART 3

// const form = document.querySelector("form");
// const inp = document.querySelectorAll('input[type="text"]');
// const h2 = document.querySelector("h2");

// console.log(inp)

// form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       for(let i=0; i<inp.length; i++) {
//           if(inp[i].value.trim() === ''){
//             h2.textContent = "some fields are empty";
//             h2.style.color = 'red'
//             break;
//           }

//       }
// })

// JS PRACICE PART 4

// const body = document.querySelector('body')
// const ul = document.querySelector('ul');
// const inp = document.querySelector("input");
// const add = document.querySelector("#add");
// const remove = document.querySelector("#rem");
// let li;

// add.addEventListener("click", () => {
//     if(inp.value === '') {}

//     else{
//     li = document.createElement("li");
//     li.textContent = inp.value;
//     ul.appendChild(li);
//     inp.value = ''
//     }

// })

// remove.addEventListener("click", () => {
//    const lastItem = ul.lastElementChild;
//    if(lastItem) {
//      ul.removeChild(lastItem);
//    }

//    else{
//     alert('no child to remove')
//    }

// })

// JS PRACICE PART 5

// const h3 = document.querySelector('h3');
// const start = document.querySelector('#start')
// const stop = document.querySelector('#stop')
// const restart = document.querySelector('#restart')
// let int;
// let count;

// start.addEventListener('click', () => {

//    count = 0;
//    int =  setInterval(function(){
//          h3.textContent = count;
//           count++;
//     }, 1000)

// })

// stop.addEventListener('click', () => {
//    clearInterval(int);
// })

// restart.addEventListener('click', () => {
//   int = setInterval(function() {
//       h3.textContent = count;
//       count++;
//      console.log(count)
//    }, 1000)
// })

// JS PRACICE PART 6

//   const tabs = document.querySelectorAll('.tab');
//     const contents = document.querySelectorAll('.tab-content');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             // Remove active classes
//             tabs.forEach(t => t.classList.remove('active'));
//             contents.forEach(c => c.classList.remove('active'));

//             // Add active to clicked tab and corresponding content
//             tab.classList.add('active');
//             document.getElementById(tab.dataset.target).classList.add('active');
//         });
//     });

// JS PRACICE PART 7

// const down = document.querySelector("#downcap");
// const pro = document.querySelector("#progress");
// const h3 = document.querySelector("h3");

// let  count = 0;

// var int = setInterval(() => {
//     if(count === 100){
//         clearInterval(int)
//          h3.style.display = "block";
//     }
//   else {
//     count++;
//     pro.style.width = count+"%";
//   }

// }, 300);

// JS Practice 8

// const input = document.querySelector("input");
// const people = document.querySelector(".people");

// const data = [
//   {
//     name: "harsh",
//     src: "https://images.pexels.com/photos/5010780/pexels-photo-5010780.jpeg",
//   },
//   {
//     name: "harshita",
//     src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "harshika",
//     src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "harshmta",
//     src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "harshu",
//     src: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "harshnika",
//     src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
//   },
//   {
//     name: "harshiha",
//     src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
//   },
//   {
//     name: "harshi",
//     src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
//   },
//   {
//     name: "harsha",
//     src: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
//   },
//   {
//     name: "harshe",
//     src: "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
//   },
//   {
//     name: "harsha",
//     src: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
//   },
// ];

// var pers = "";

// data.forEach(function (e) {
//   pers += `<div className="person">
//                <img src="${e.src}" alt="" />
//                <h4>${e.name}</h4>

//         </div> `;
// });

//   people.innerHTML = pers;


//   input.addEventListener("input" , function(e) {
//          var matching = data.filter(function(e) {
//             return e.name.startsWith(input.value)
//          })
          
//          var matchingUser = ""
//          matching.forEach(function(e) {
//             matchingUser += `<div className="person">
//                <img src="${e.src}" alt="" />
//                <h4>${e.name}</h4>

//         </div> `;
//          })

//          people.innerHTML = matchingUser;
//   })



// Js Practice 9 

//  var textarea = document.querySelector("textarea")
//  var span = document.querySelector("#counter")



//  textarea.addEventListener("input", () => {
//        span.innerHTML =  textarea.value.length;
       
//  })



// JS Practice 10

  window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      document.getElementById('progress-bar').style.width = scrollPercent + "%";
    });

