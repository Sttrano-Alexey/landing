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


// Отправка данных

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    let form = event.target;
    let name = form.querySelector('input[type="text"]').value;
    let email = form.querySelector('input[type="email"]').value;
    let telegram = form.querySelector('.telegram').value;
    let speciality = form.querySelector('select').value;
    let data = {
        name,
        email,
        telegram,
        speciality
    };
    console.log('отправлено на сервер');
    console.log('данные:', data);
});



// document.querySelector('.form').addEventListener('submit', function(event){
//     event.preventDefault();
//     let form = event.target;
//     let name = form.querySelector('input[type="text"]').value;
//     let email = form.querySelector('input[type="email"]').value;
//     let telegram = form.querySelector('.telegram').value;
//     let speciality = form.querySelector('select').value;
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', form.action, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log('отправлено на сервер');
//             console.log('данные:', {name, email, telegram, speciality});
//         } else if (xhr.status !== 200) {
//             console.log('ошибка отправки');
//         }
//     };
//     let data = {
//         name,
//         email,
//         telegram,
//         speciality
//     };
//     xhr.send(JSON.stringify(data));
// });



// Взаимодействие карьерных программ с формой



document.querySelectorAll('.career-btn').forEach(button => {
    button.addEventListener('click', function(event){
        let speciality = event.currentTarget.id;
        let select = document.querySelector('select');
        let btns = document.querySelectorAll('.career-btn');
        btns.forEach(btn => {
            if(btn.id === speciality){
                btn.classList.add('selected');
                btn.innerText = 'Выбрано';
            } else {
                btn.classList.remove('selected');
                btn.innerText = 'Выбрать';
            }
        });
        if(speciality === 'PO'){
            select.value = 'UI';
        } else if(speciality === 'QA'){
            select.value = 'QA';
        } else {
            select.value = 'UI';
        }
    });
});

document.querySelector('select').addEventListener('change', function(event){
    let speciality = event.target.value;
    let btns = document.querySelectorAll('.career-btn');
    btns.forEach(btn => {
        if(btn.id === speciality){
            btn.classList.add('selected');
            btn.innerText = 'Выбрано';
        } else {
            btn.classList.remove('selected');
            btn.innerText = 'Выбрать';
        }
    });
});

