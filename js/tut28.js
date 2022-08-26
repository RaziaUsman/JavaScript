console.log("Welcome");
//console.log(Object.prototype);
let car ={
    name:'razia',
    channel:"code with herry",
    address: "Mars"
}
console.log(car)
function obj(givenName)
{
    this.name =givenName;
   
 }
 obj.prototype.getname = function(){
     return this.name;
 }
 obj.prototype.setname = function(newname){
    this.name=newname;
}
 let obj2 = new obj("Aneela")
console.log(obj2);