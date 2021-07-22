let secnav = document.querySelector(".secnav");
let bodyscroll = document.querySelector('html,body');
window.addEventListener('scroll', function() {
    // console.log(bodyscroll.scrollTop);
    if (bodyscroll.scrollTop >= 30) {
        console.log('test')
        secnav.style.display = 'flex';
    } else {
        console.log('done')
        secnav.style.display = 'none';
    }
})
let scrolltop = document.querySelector('.scroll-top');
window.addEventListener('scroll', function() {
    if (bodyscroll.scrollTop >= 100) {
        document.querySelector('.scroll-top').style.display = 'block'
    } else {
        document.querySelector('.scroll-top').style.display = 'none'
    }
})
scrolltop.addEventListener('click', function() {
    window.scroll(0, 0);
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}