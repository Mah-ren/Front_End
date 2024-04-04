let btn1 = document.getElementById('btn1');
btn1.onclick = () =>{
    document.body.style.background = 'red'; 
}
//! the problem with events is that you can't make more than one function like this 
/*
btn.onclick = () =>{
    btn.style.color = 'aqua';
}
*/

//! but you can write everything you want in the first function like this
/*
btn.onclick = () =>{
    btn.style.color = 'aqua';
    document.body.style.background = 'red';
}
*/


//! to solve the problem of the onclick "you can't make more than one function -> use the .addEventListener"
//! btn.addEventListener('event', function(){})
btn1.addEventListener('click', function(){
    document.body.style.backgroundColor = '#123'
    btn1.style.color = 'white';
    document.body.style.color = 'white';
    btn1.style.backgroundColor = 'aqua';
})

let btn2 = document.getElementById('btn2');
//! onmouseup you click on the button and leave it on the button not out of it
//! the onmouseenter is like the :hover in css
//! onmousemove when the mouse move in the button
//! onmouseout when the mouse enters the button and then go out of it without clicking on it 
//! same thing with onkey
btn2.onmouseup, btn2.onkeyup = () =>{
    btn2.style.color = 'magenta';
    btn2.style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'red';
} 
