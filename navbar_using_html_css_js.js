let btnopen = document.getElementById('open');
let btnclose = document.getElementById('close');
let navbar = document.querySelector('.navbar');



btnopen.onclick = function() {
    this.classList.add('hide');
    btnclose.classList.remove('hide');
    navbar.classList.remove('hide');
    
}

btnclose.onclick = function() {
    this.classList.add('hide');
    btnopen.classList.remove('hide');
    navbar.classList.add('hide');

} 