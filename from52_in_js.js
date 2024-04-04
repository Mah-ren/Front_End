let body = document.querySelector('body');
body.style.cssText = 'color: #123;';


let title = document.getElementById('title');
/*
!   let title = document.getElementById('title');
!   title.style.color = 'magenta';
!   title.style.backgroundColor = 'gold';
!   title.style.width = '30%';
!   title.style.borderRadius = '10%';
!   title.style.padding = '15px 20px ';
!   title.style.textAlign = 'center';
!   title.style.border = 'inset 2px magenta';
!   title.style.margin = '20px 10px';

*/

title.style.cssText = `
    color: magenta;
    background-color: gold;
    width: 30%;
    text-align: center;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    
`