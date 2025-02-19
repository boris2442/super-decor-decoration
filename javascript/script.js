

window.onload = function() {
    document.querySelector('.loader').style.display = 'none';;
    document.querySelector('.loader').style.transition='5s ease-out';
};

const title=document.querySelector("h1");
const typewriter=new Typewriter(title, {
    loop:true,
    delay:100
})

typewriter
.typeString("<span class='name-entreprise'>SUPER DECOR:</span><br /> <span class='spanTitle'>EXPERT EN DéCORATION éVèNEMENTIELLE 🤌 </span> ")               
.pauseFor(2000)      
.deleteAll()       

.start();




  
const links = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");

const scrollActive = () => {
    let scroll = window.scrollY; 
    

    sections.forEach(section => {
        const height = section.offsetHeight;
        const top = section.offsetTop;
        let id = section.getAttribute("id");

        
        
        if (scroll >= top - 400 && scroll < top + height) {
            links.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(`header ul li a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};

window.addEventListener("scroll", scrollActive);


//partie du scrollReveal

const sr=ScrollReveal({
  origin:'top',
  distance: '40px',
  duration: 1000,
  reset: true
});

sr.reveal('.marquee, .title, .para, .link, .second-title, .spantexte, .third-title, .box, .scrollform, box-footer, .fa-brands, footer i, .parent-page, .fa-regular, .fas ', {interval: 200});



const images=document.querySelectorAll('img');
let options={
    root:null,
    rootMargin:"-100px 0px 0px 0px",
    threshold:0
};


function handleIntersection(entries){

entries.forEach(entry=>{
    if(entry.isIntersecting){
        entry.target.style.opacity=1
    }
})
}

const observer=new IntersectionObserver(handleIntersection, options)

images.forEach(image=>{
observer.observe(image);
});




const navigation=document.querySelector("header ul")
const menu=document.querySelector(".fa-bars");
menu.addEventListener("click",()=>{
navigation.classList.toggle("translate");
})

window.addEventListener("scroll", ()=>{
    navigation.classList.remove("translate");
})

