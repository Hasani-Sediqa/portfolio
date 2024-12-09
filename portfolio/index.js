const menuBtn= document.querySelector(".menu-btn");
const navLinks= document.querySelector(".nav-links");

/*
document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll(".projects");

  projects.forEach(project => {
    const image = project.querySelector(".projects-image");
    const viewHidden = project.querySelector(".view-hidden");

    image.addEventListener("mouseover", () => {
      projects.classList.add("visible");
    });

    image.addEventListener("mouseout", () => {
      projects.classList.remove("visible");
    });
  });
});*/

menuBtn.addEventListener('click', ()=>{
navLinks.classList.toggle('mobile-menu');
});

