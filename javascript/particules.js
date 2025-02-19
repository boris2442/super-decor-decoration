/* Configuration des particules */
particlesJS('particles-js', {
    particles: {
        number: { value: 100 }, 
        size: { value: 3 }, 
        move: { speed: 2 }, 
        color: { value: "#ffffff" }, 
        line_linked: { 
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.5,
            width: 1
        }
    },
    interactivity: {
        events: {
            onClick: { 
                enable: true, 
                mode: "push"
            }
        },
        modes: {
            push: { particles_nb: 5 } 
        }
    }
});