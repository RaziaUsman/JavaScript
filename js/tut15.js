//console.log("Welcome to tut15");
let a = document.querySelector(".container");
//console.log(a.childNodes)

//console.log(a.children);
//console.log(a.parentNode);
//let nodeName = a.childNodes[1].nodeName;
//console.log(nodeName);
//let nodeType = a.childNodes[0].nodeType;
//console.log(nodeType);
// 1. element
// 2. attribute
// 3. text
// 8. comment
// 9. document
// 10.doc type
let element = document.querySelector(".container");
//console.log(element.children[1].children);
//console.log(element.firstChild);
//console.log(element.firstElementChild);
//console.log(element.lastChild);
//console.log(element.lastElementChild);
//console.log(element.childElementCount);
//console.log(element.firstElementChild.parentNode);
console.log(element.firstElementChild.nextElementSibling);
console.log(element.firstElementChild.nodeName);

