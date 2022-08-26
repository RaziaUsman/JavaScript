console.log("welcome");
let array = ["apple","pear","grapes"];
localStorage.setItem("fruits",JSON.stringify(array));

localStorage.setItem("name","razia");
localStorage.setItem("name2","Usman");
//localStorage.clear();
localStorage.removeItem("name");
let name = localStorage.getItem("name2");
 name = JSON.parse(localStorage.getItem("fruits"));
sessionStorage.setItem("sessioname","srazia");
console.log(sessioname);