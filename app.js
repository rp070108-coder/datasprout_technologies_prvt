/* MOBILE MENU */
const menu=document.getElementById("menuBtn");
const nav=document.getElementById("nav");

menu.addEventListener("click",()=>{
nav.classList.toggle("show");
});


/* COUNTERS */
function animateCounter(id,target,speed){
let count=0;

let interval=setInterval(()=>{
count+=Math.ceil(target/100);

if(count>=target){
count=target;
clearInterval(interval);
}

document.getElementById(id).innerText=count+"+";

},speed);
}

animateCounter("clients",150,30);
animateCounter("projectsCount",320,20);
animateCounter("supportCount",900,10);
animateCounter("trackingCount",5000,1);


/* SCROLL REVEAL */
function reveal(){
let items=document.querySelectorAll(".reveal");

items.forEach(item=>{
let top=item.getBoundingClientRect().top;
let visible=window.innerHeight-100;

if(top<visible){
item.classList.add("active");
}
});
}

window.addEventListener("scroll",reveal);
reveal();


/* CONTACT FORM */
document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

if(name==""){
alert("Please enter your name");
return;
}

document.getElementById(
"message"
).innerText=
"Thanks! Our team will contact you.";
});