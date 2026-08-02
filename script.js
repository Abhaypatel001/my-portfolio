
const typingText = [
    "BCA Student",
    "Fullstack Developer",
    "Java Developer",
    "Python Learner",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    let currentWord = typingText[wordIndex];

    if (isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex--);
    } else {
        typing.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        speed = 1200;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === typingText.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if(themeBtn){
        themeBtn.textContent="☀";
    }
}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.textContent="☀";

localStorage.setItem("theme","dark");

}else{

themeBtn.textContent="🌙";

localStorage.setItem("theme","light");

}

});

}



const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}



const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});


if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}



const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

if(name===""||email===""||message===""){

e.preventDefault();

alert("Please fill all fields.");

return;

}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

e.preventDefault();

alert("Please enter a valid email.");

return;

}

alert("Message Sent Successfully!");

});

}



window.onload=()=>{

console.log("Welcome to Abhay Portfolio");

}


const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();



const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/contact",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            name,
            email,
            message
        })

    });

    const data = await response.json();

    const success = document.getElementById("successMessage");

success.style.display = "block";

setTimeout(() => {

    success.style.display = "none";

},3000);

    contactForm.reset();

});