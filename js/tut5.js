console.log("welcome to javaScript");
let num = 123;
console.log(num);
console.log("datatype",(typeof num));
num = String(123);
console.log(num);
console.log("datatype",(typeof num));
//let date = new Date();
//console.log(date,(typeof date));
let date = String(new Date());
console.log(date,(typeof date));
let arr = [1,2,3,4];
console.log(arr.length, (typeof arr));
arr = String([1,2,3,4]);
console.log(arr.length, (typeof arr));
let i = 5;
console.log(i);
console.log(i.toString());
console.log(i);
//let str = "1233";
//console.log(str);
//let stri = number("1233");
//console.log(typeof stri);
let x = parseInt("32.34556");
console.log(x);
x = parseFloat("32.34556");
console.log(x);
console.log(x.toFixed(6));
// Type coercion
 let a ="1234";
 let b = 987;
 console.log(a + b);