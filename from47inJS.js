/*
! this is the first way to put each line of code in the onload if you want to write  the script in the head of html instead of the body 
!   onload = function() {
    
!   let head = document.getElementsByClassName('Hna');

!   let h = document.getElementById('Hna');
!   h.style.color = '#AA0000';

!   for (let i = 0; i < head.length; i++) {

!        head[i].style.color = 'red';
!   }
!   }

*/

//! if you want to write the script in the body then you will not have to write the onload 



let head = document.getElementsByClassName('Hna');

let h = document.getElementById('Hna');
h.style.color = '#AA0000';

for (let i = 0; i < head.length; i++) {

    head[i].style.color = 'red';
}

let rere = document.getElementsByTagName('h2');
for (let i = 0; i < rere.length; i++) {

    rere[i].style.color = 'yellow';
}

//! أحسنهم على الإطلاق هي الكويري سلكتور عشان بينفع تكتب جواها دوت كلاس او هاش اي دي او تاج
document.querySelector('.Hna').style.color = 'green';

//! التاج نيم و الكلاس نيم و الكويري سلكتور اول بيرجعوا اريه

let b = document.body;
b.style.backgroundColor = 'blue';

//! let t = document.title;
//! t.style.backgroundColor = 'blue';

// let button1 = document.querySelector('.pro');
// button1.addEventListener("click", function() {
//     Image = image.pro;
//     backgroundColor = 'red';
// })


// let button = document.querySelector('.rere');
// button.addEventListener("click", function() {
//     Image = image
//     backgroundColor = 'red';
// })

//todo images
let images = document.images;
images[0].src = 'programming-background.jpg';
console.log(images);

//todo links
let links = document.links[0];
links.href = 'https://www.twitter.com/'
