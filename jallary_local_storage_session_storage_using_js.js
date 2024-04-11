let main_image = document.getElementById('#main_image');

if(localStorage.length > 0){
    document.body.style.backgroundColor = localStorage.background_color;
    main_image.src = localStorage.image_src;
}

let set_background_color = function(color){
    // localStorage.setItem('background_color', color);
    document.body.style.backgroundColor = color;
}

let set_main_image = function(image_src = "images/human_being/blond_boy.jpg"){
    localStorage.setItem('image_src', image_src);
    main_image.src = image_src;
}
    
































//! this is what i did 

// let main_image = document.getElementById('main_image');
// let upper_images = document.querySelectorAll('.upper_images');



// // if(localStorage.length > 0)
// //     main_image.src = localStorage.;

// let image_onmouseenter = function(img){
//     return (img.onmouseenter === true ?  true : false);
// }

// for(let x = 0; x < upper_images.length; x++){
//     if(image_onmouseenter(upper_images[x]))
//         document.body.style.backgroundColor = 'red';
//     else
//         continue;
// }

// // let image_onclick = function(){

// // }

