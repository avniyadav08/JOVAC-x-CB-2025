console.log("Hello Let's learn JavaScript.")

var a=5;
a=a+1; //allowed
var b=6;
var c="Avni";

console.log(a+b+8);
console.log(typeof a,typeof b,typeof c);

const a1=6;
a1=a1+1; //not allowed because a1 is constant

let a=5;
let b=6;
let c="Avni";

{
    let a=66; //block scope or block level
    console.log(a)
}
console.log(a)

var a = 5;
var b = 6;
var c = "Avni";

{
    var a = 66; //global scope
    console.log(a)
}
console.log(a)

let x = "Avni";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q,
    typeof r)

//why null data type is object?

let o={
    "name":"Harry",
    "job code":5600
}

console.log(0)
o.salary="100crores"
console.log(o)
o.salary="500crores"
console.log(o)



console.log("I am condional tutorial") 

let age=45;

if(age>18){
    console.log("You can drive");
}
else{
    console.log("you cannot drive");
}

let agee=70;
if(agee>=18){
    console.log("You can drive")
}
else if(agee<18){
    console.log("You can not drive ")
}
else{
    console.log("are u kidding")
}



 console.log("I am a tutorial on loops")

let a=1;
console.log(a)
console.log(a+1)
console.log(a+2)



i=0
while(i<6){
    console.log(i)
    i++;
}

let n=6;
for(i=0;i<n;i++){
    console.log(i);
}


let i=10;
do {
    console.log(i)
    i++;
} while (i<6);

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}



function nice(name) {
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are good!")
    console.log("Hey" + name + "you are very nice!")
}

nice("Avni")

function sum(a,b){
    console.log(a+b)
}
sum(3,5)

function sum(a,b,c=3){
    return a+b+c
}
result=sum(3,5)
console.log("the sum is "+ result)

//arrow function
const func1=(x)=>{
    console.log("I am an arrow function",x)
}
func1(34);
func1(66);





console.log("Strings")
let a="Avni";
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])

console.log(a.length)
let real_name ="Avni"
let friend="Shivi"
console.log("Her name is " + real_name +" and his friend name is "+ friend)
console.log(`his name is ${real_name} and her friend name is ${friend}`)

let b="Vibhi"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.slice(2))
console.log(b.replace("Vi","Av"))
console.log(b.concat(a))
console.log(b.concat(a,"Komal","Soni"))



console.log("Arrays")

let arr=[1,2,3,4,15,20]
console.log(arr)
console.log(arr.length)
console.log(arr[3])

let newarr=arr.map((e)=>{
    return e**2
})
console.log(newarr)

const greaterThanSeven=(e)=>{
    if(e>7){
        return true
    }return false
}
console.log(newarr.filter(greaterThanSeven));   

let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))


let num=[6,5,4,3,2,1];
const fsct=(a,b)=>{
    return a*b
}
console.log(num.reduce(fsct))




let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML="<b>YAYY you were clicked</b> Enjoy your click"
})



function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function afterGreeting() {
  console.log("Greeting is done!");
}

greet("Avni", afterGreeting);



const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject("Operation failed.");
    }
  
});
myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
