// Header Fixed
let header = document.querySelector('header');
header.classList.toggle('fixed', window.scrollY > 0);

// Go To Up
let upBtn = document.querySelector('.up');

window.addEventListener('scroll', function(){
    // Header Fixed
    header.classList.toggle('fixed', window.scrollY > 0);

    // Go To UpBtn Show
    if( window.scrollY > 0){
        upBtn.style.bottom = `${15}px`;
        upBtn.style.opacity = `${1}`;
    }else{
        upBtn.style.opacity = 0;
        upBtn.style.bottom = `${-100}px`;
    }

    // section active class
    sectionActive();
});


// set bar
let barIcone = document.querySelector('.bar');
barIcone.addEventListener("click", function(){
    header.classList.toggle('active');
});

// clicked to top
upBtn.addEventListener('click', function(){
    window.scrollTo(0,0);
});

// section active class
let sections = document.querySelectorAll("section");

function sectionActive(){
    let scrollPosition = document.documentElement.scrollTop;

    sections.forEach(section =>{
        if(scrollPosition >= section.offsetTop - section.offsetHeight * .5 &&
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * .5){

            let sectionId = section.attributes.id.value;

            removeActiveClasses();
            addActiveClass(sectionId);
        }
    });
}

let navLinks = document.querySelectorAll("header nav a");

// Remove All Active Classes
function removeActiveClasses(){
    navLinks.forEach(li =>{
        li.classList.remove('active');
    });
}

// Add Active Class To link Section
function addActiveClass(id){
    document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let currentId = e.target.attributes.href.value;
    let section = document.querySelector(currentId);

    window.scroll({
      top: section.offsetTop,
      behavior: "smooth",
    });
  });
});

// set skills section
let skills = document.querySelector('.skills');

window.onscroll = function(){

    // skills offsetTop
    let skillsOffSetTop = skills.offsetTop;

    // skills Outter Height
    let skillsOffSetHeight = skills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window Scroll Top
    let windowScroll = this.pageYOffset;


    if(windowScroll > (skillsOffSetTop + skillsOffSetHeight- windowHeight)){

        let allSpan = document.querySelectorAll('.skills-content .prograss-bar .prog');

        allSpan.forEach(skill => {
            skill.style.width = skill.dataset.width;
        });

    };
}

// Filter Projects

const items = document.querySelector('#Portfolio .items'),
Projects = document.querySelectorAll('.portfolio-content .port');

items.onclick =  (item)=>{

    if(item.target.classList.contains('item')){
        items.querySelector('.active').classList.remove('active');
        item.target.classList.add('active');

        Projects.forEach(project =>{
            if(item.target.getAttribute('data-name') == project.getAttribute('data-name') || item.target.getAttribute('data-name') == 'all'){
                project.classList.remove("show");
                project.classList.remove('hide');
                setTimeout(() => {
                    project.classList.add('show');
                }, .1);
            }else{
                project.classList.add("hide");
                project.classList.remove("show");
            }
    
        });
    }
}
