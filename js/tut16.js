console.log("welcome");
let a = document.getElementById("myfirst").addEventListener("click" , function(e)
{
    let vaiable = e.target;
    vaiable = e.target.className;
        console.log(vaiable);
console.log("YOU HAVE CLICK THE HEADING");
console.log(e);
//location.href = "https://www.google.com.pk/?gws_rd=ssl";
});