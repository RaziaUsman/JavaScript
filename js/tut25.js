let divElem = document.createElement("div");
let text = document.createTextNode("are you fine?");
divElem.appendChild(text);
divElem.setAttribute("id","elem");
divElem.setAttribute("class","elem");
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");
//inert element before first
container.insertBefore(divElem,first);
console.log(divElem,container,first);
// add event listener to the divElem
divElem.addEventListener("click",function()
{
    let noTextarea=document.getElementsByClassName("textarea").length;
    if(noTextarea==0) 
    {
    let html=elem.innerHTML;
    divElem.innerHTML=`<textarea class=" textarea form-control" id="textarea" rows="3">${html}</textarea>`;
   }
//listen for the blur element
let textarea =document.getElementsById("textarea");
textarea.addEventListener("blur",function()
{
    elem.innerHTML = textarea.nodevalue;
})

});