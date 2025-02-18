

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
.typeString("<span>SUPER DECOR:</span><br /> <span class='spanTitle'>EXPERT EN DECORATION EVENEMENTIELLE 🤌 </span> ")               
.pauseFor(2000)      
.deleteAll()       
// .typeString(" "  )
// .pauseFor(200
// 0)
//  .deleteAll()
.start();



const links=document.querySelector("header ul li a");

const scrollActive=()=>{
    const sections=document.querySelectorAll("section")
      sections.forEach(section=>{
        const height=section.ofsetHeight;
        const top=section.ofsetTop
        const scrool=scroll.Y
        let id=document.getAttribute("id")
      })
      if(scroll>=top-400  && scroll<top+height){
        links.forEach(link=>{
          link.classList.remove('active')
        })
        let recuperationId=document.querySelector(`header ul li a*[href="${id}"]`).classList.add("active")
      }
}
window.addEventListener("scroll", scrollActive)
  