console.log("welcome class");
let a = document.createElement("li");
let text = document.createTextNode("I am Razia Usman");
console.log(a);
a.appendChild(text);
a.className = "childul";
a.id = "childli";
a.setAttribute("title",'mytitle',);
a.innerHTMl = "<b>hello this is Razia</b>";
let ul = document.querySelector("ul.this");
ul.appendChild(a);
console.log(ul);
console.log(a);

let abc = document.createElement("h3");
abc.className = "ele";
abc.id = "ele";
let tnode = document.createTextNode("I am Razia");
abc.appendChild(tnode);
a.replaceWith(abc);
let element = document.getElementById("myul");
element.replaceChild(abc, document.getElementById("fui"));
element.removeChild(document.getElementById("lui"));
abc.removeAttribute("id");
console.log(abc.hasAttribute('href'));
 Quiz
let a = document.createElement("h2");
let text = document.createTextNode("go to Code with harry");
