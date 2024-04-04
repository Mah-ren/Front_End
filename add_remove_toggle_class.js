let btn1 = document.getElementById('btn1');

// btn1.onmouseup = () => {
//     btn1.classList.add('name');
// }

// btn1.oncontextmenu = () => {
//     btn1.classList.remove('name');
// }

//! this is better 
btn1.onmouseup = () => {
    btn1.classList.toggle('name');
}