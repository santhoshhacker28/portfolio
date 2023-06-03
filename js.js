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
    var name1=document.getElementById("name");
    var mail1=document.getElementById("mail");
    var message1=document.getElementById("message");
    var button1=document.getElementById("button");
    var enter=document.getElementById("enter");
    var mailcheck= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@.[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/;
    name1.focus();
    enter.addEventListener('input',()=>{
        if(name1.value.length>=2&&message1.value.length>=3&& mail1.value.length>=3 && mail1.value.match(mailcheck)){
          button1.removeAttribute('disabled');
          button1.style.backgroundColor='purple';
        }else{
          button1.setAttribute('disabled','disabled');
          button1.style.backgroundColor='plum';
    }});
    name1.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var length=mail1.value.length;
            mail1.setSelectionRange(length, length);
            mail1.focus();
        }
    });
    mail1.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var length=message1.value.length;
            message1.setSelectionRange(length, length);
            message1.focus();
        }
    });
    function string(evt){
        var int=String.fromCharCode(evt.which);
        if(!(/[a-z A-Z]/.test(int))){
            evt.preventDefault();
        }
    }
    var list=document.getElementById("list")
    var menu=document.getElementById('menu');
    menu.addEventListener("click",()=>{
        list.style.display="block";
        menu.style.display="none";
        document.getElementById("homescreen").style.display="none";
        document.getElementById("skillscreen").style.display="none";
        document.getElementById("projectscreen").style.display="none";
        document.getElementById("contactscreen").style.display="none";
    });
    document.getElementById("close").addEventListener("click",()=>{
        list.style.display="none";
        menu.style.display="block";
        document.getElementById("homescreen").style.display="block";
        document.getElementById("skillscreen").style.display="block";
        document.getElementById("projectscreen").style.display="block";
        document.getElementById("contactscreen").style.display="block";
    })
    document.getElementById("contact1").addEventListener("click",()=>{
        list.style.display="none";
        menu.style.display="block";
        document.getElementById("homescreen").style.display="block";
        document.getElementById("skillscreen").style.display="block";
        document.getElementById("projectscreen").style.display="block";
        document.getElementById("contactscreen").style.display="block";
    })
    document.getElementById("project1").addEventListener("click",()=>{
        list.style.display="none";
        menu.style.display="block";
        document.getElementById("homescreen").style.display="block";
        document.getElementById("skillscreen").style.display="block";
        document.getElementById("projectscreen").style.display="block";
        document.getElementById("contactscreen").style.display="block";
    })
    document.getElementById("skills1").addEventListener("click",()=>{
        list.style.display="none";
        menu.style.display="block";
        document.getElementById("homescreen").style.display="block";
        document.getElementById("skillscreen").style.display="block";
        document.getElementById("projectscreen").style.display="block";
        document.getElementById("contactscreen").style.display="block";
    })
    document.getElementById("home1").addEventListener("click",()=>{
        list.style.display="none";
        menu.style.display="block";
        document.getElementById("homescreen").style.display="block";
        document.getElementById("skillscreen").style.display="block";
        document.getElementById("projectscreen").style.display="block";
        document.getElementById("contactscreen").style.display="block";
    })
