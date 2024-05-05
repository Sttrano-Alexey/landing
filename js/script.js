window.onscroll = function() {scrollFunction()};

let lastScrollTop = 0;

function scrollFunction() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        // Scrolling down
        document.querySelector('.header').classList.remove("active");
    } else {
        // Scrolling up
        document.querySelector('.header').classList.add("active");
    }
    lastScrollTop = scrollTop;
}

document.querySelector('.header__menu-icon').addEventListener('click', function(){
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.header__menu-icon').classList.toggle('open');
});


document.querySelectorAll('.mobile-link').forEach(function(item){
    item.addEventListener('click', function(){
        document.querySelector('.mobile-menu').classList.remove('active');
        document.body.classList.remove('lock');
        document.querySelector('.header__menu-icon').classList.remove('open');
    });
});


document.querySelectorAll('.contact-popup-void').forEach(function(item){
    item.addEventListener('click', function(){
        document.querySelector('.contact-popup').classList.add('open');
        document.body.classList.add('lock');
        document.querySelector('.header__menu-icon').classList.remove('open');
        document.querySelector('.mobile-menu').classList.toggle('active');
    });
});


document.querySelector('.contact-close').addEventListener('click', function(){
    document.querySelector('.contact-popup').classList.remove('open');
    document.body.classList.remove('lock');
});

