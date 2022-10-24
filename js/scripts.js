window.addEventListener("load", function() {
let form = document.getElementById("survey"); 
const nameArray = new Array();
const body = document.querySelector("body");


form.addEventListener("submit", function(event) {
  event.preventDefault();
  let input1 = document.querySelector("input#a").value;
  let input2 = document.querySelector("input#b").value;
  let input3 = document.querySelector("input#c").value;
  let input4 = document.querySelector("input#d").value;
  nameArray.push(input1);
  nameArray.push(input2);
  nameArray.push(input3);
  nameArray.push(input4);
  console.log(nameArray);
  console.log("second array element", nameArray[1]);
  console.log("first array element", nameArray[0]);
  console.log("third array element", nameArray[2]);
  const secondArray = new Array();
  secondArray.push(nameArray[1])
  secondArray.push(nameArray[0])
  secondArray.push(nameArray[2])
  console.log('secondarray', secondArray)
  // second array created, now onto listing it
  const newDiv = document.createElement("div")
  document.body.appendChild(newDiv);
  // create ul, attach ul to div
  document.createElement("ul")
  const firstUl = document.querySelector("ul");
  firstUl.innerText = "These are our array outputs:"
  newDiv.appendChild(firstUl);
  // create li's and append to firstUl

  
  firstUl.prepend(liElement);
  const liElement = document.createElement("li");
  liElement.append(secondArray[0]);
  });
});

// window.addEventListener("load", function() {
//   let form = document.getElementById("survey"); 
//   let names = [];
//   const array = names
  
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let input1 = document.querySelector("input#a").value;
//     let input2 = document.querySelector("input#b").value;
//     let input3 = document.querySelector("input#c").value;
//     let input4 = document.querySelector("input#d").value;
//     array.push(input1);
//     array.push(input2);
//     array.push(input3);
//     array.push(input4);
//     console.log(array)
  
//     let newArray = array[1,0,3];
//     // document.createElement("ul");
//     });
//   });