

const backdrop = document.getElementById('backdrop');
const aside = document.querySelector('aside');

document.getElementById('open-btn').addEventListener('click', function() {
    aside.classList.add('aside-visible');
    backdrop.classList.remove('backdrop-invisible');
    backdrop.classList.add('backdrop-visible');
    document.body.classList.add('no-scroll');
    console.log("toggle")
});

document.getElementById('close-btn').addEventListener('click', function() {
    aside.classList.remove('aside-visible');
    backdrop.classList.remove('backdrop-visible');
    document.body.classList.remove('no-scroll');
    console.log("toggle")
});

backdrop.addEventListener('click', function () {
    backdrop.classList.remove('backdrop-visible');
    aside.classList.remove('aside-visible');
    document.body.classList.remove('no-scroll');
})