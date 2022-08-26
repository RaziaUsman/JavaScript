console.log("Welcome to tut12");
//let a = document;
//a = document.all;
//a = document.forms;
//a = document.forms[1];
//Array.from(a).forEach(function(element){
  //  console.log(element);
//})
//a = document.links;
//console.log(a);



// leacture 14
//let a = document.getElementById("myfirst");
//a = a.className;
//a = a.childNodes;
//a = a.parentNode;
//a.style.color = "red";
//a.innerText ="Razia Usman";
//a.innerHTML = "<b><i>RAZIA USMAN</i></b>"
//console.log(a.innerHTML);
//let a = document.querySelector("#myfirst");
//a = document.querySelector(".child");
//a = document.querySelector("h1");
//a = document.querySelector("#mysecond");
//a.style.color = "green";
//let element = document.getElementsByClassName("child")
let element = document.getElementsByClassName('container');
element = document.getElementsByTagName('div');
Array.from(element).forEach(function(element)
{
    console.log(element);
    element.style.color = "red";
    element.style.background =" yellow";
})

