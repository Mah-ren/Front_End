let hamburger_wrapper = document.getElementById('hamburger_wrapper');
let hamburger_icon = document.getElementById('hamburger_icon');
let first_span = document.getElementById('first_span');
let second_span = document.getElementById('second_span');
let third_span = document.getElementById('third_span');


hamburger_wrapper.addEventListener('click', () => {
    hamburger_wrapper.classList.toggle('active');
})
