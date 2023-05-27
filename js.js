{
    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
        } else {
        nav.classList.remove("nav--hidden");
        }
        lastScrollY = window.scrollY;
    });
    }
    {
    const nav = document.querySelector(".navmobile");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
        } else {
        nav.classList.remove("nav--hidden");
        }
        lastScrollY = window.scrollY;
    });
    }
    window.addEventListener("pageshow",()=>{
        document.getElementById("name").value="";
        document.getElementById("mail").value="";
        document.getElementById("message").value="";
    });