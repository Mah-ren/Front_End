/*
! this is the first way to put each line of code in the onload 
! if you want to write  the script in the head of html instead of the body 
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



let head = document.getElementsByClassName('Hna1');
 
for (let i = 0; i < head.length; i++) {

    head[i].style.color = 'red';
}

let rere = document.getElementsByClassName('Hna2');

for (let i = 0; i < rere.length; i++) {

    rere[i].style.color = 'yellow';
}



//! أحسنهم على الإطلاق هي الكويري سلكتور عشان بينفع تكتب جواها دوت كلاس او هاش اي دي او تاج
//! بس المشكلة دلوقتي إنها مختارة اول عنصر في الاريه و الاريه ده فيه كل عنصر واخد كلاس بالاسم 
let Hna1 = document.querySelectorAll('.Hna1');

for(let x = 0; x < Hna1.length; ++x){
    Hna1[x].style.color = 'magenta';
}



//! التاج نيم و الكلاس نيم و الكويري سلكتور اول بيرجعوا اريه

let b = document.body;
b.style.backgroundColor = '#123';

let t = document.head.title;

// let button1 = document.querySelector('.pro');
// button1.addEventListener("click", function() {
//     Image = image.pro;
//     backgroundColor = 'red';
// })


// let button = document.querySelector('.hna');
// button.addEventListener("click", function() {
//     Image = image
//     backgroundColor = 'red';
// })

//todo images
let images = document.images;
images[0].src = 'profile.jpg';
images[1].src = 'profile.jpg';
images[2].src = 'profile.jpg';
images[3].src = 'profile.jpg';

//! i want to hide them cause they take most of the space
images[0].src = '';
images[1].src = '';
images[2].src = '';
images[3].src = '';

console.log(images);




//todo links
let links = document.links;
for(let i = 0; i < links.length; ++i){
    links[i].style.color = 'white';
    links[i].style.textDecoration = '0';

}
links.href = 'https://www.twitter.com/'

/*
! this lesson is how to use the selector and sibling
*/
let element = document.querySelector('#mahmoud');
element.style.color = 'red';
element.previousElementSibling.style.color = 'tomato';
element.nextElementSibling.style.color = 'magenta';
element.previousSibling.remove();

/*
! summerize the innerHTML & outerHTML 
! innerHTML for the code between the tags <> of the container
! outerHTML for the code between the tags <> of the container and and the container
! <div class="div"> 
!     <h1 class="h1"> hello mahmoud </h1>
! </div>
! -------------------- if you wanna change the div and the h1 ----------------------------------------
! ----------change the div ----------------------|-------------change h1 ------------------------------ 
! so you will select the parent which is the div | so you will select the parent which is the h1
! and use the outerHTML                          | and use the outerHTML and if the div has only 
!                                                | you will be able to use the innerHTML                                                               
*/

let div = document.querySelector('.outer_container');
// div.innerHTML = '<p class="p">this is the p after changing the div by using outerHTML</p>';
div.outerHTML = '<p class="p">this is the p after changing the div by using outerHTML</p>';



