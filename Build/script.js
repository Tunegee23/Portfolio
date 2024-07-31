
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

    document.addEventListener("DOMContentLoaded", function(){
        const menuToggle = document.getElementById("menu-toggle")
        const menu = document.getElementById("menu")
    
        menuToggle.addEventListener("click", function(){
            menu.classList.toggle("active");
            if(menu.classList.contains("active")) {
                menu.style.display="flex";
            } else {
                menu.style.display="none"
            }
        })
    });

