

window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').style.transition='5s ease-out'
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
