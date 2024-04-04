let btn_up_scroll = document.getElementById('btn_up_scroll');

window.onscroll = function(){
    if(this.scrollY >= 1000)
        btn_up_scroll.style.display = 'block';
    else
        btn_up_scroll.style.display = 'none';
}

btn_up_scroll.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
onload = function(){
    this.document.body.style.backgroundColor = 'magenta';
}

document.write(screen.width + '\n');
document.write(screen.height + '\n');
document.write(screen + '\n');
document.write(screen.availWidth + '\n');
document.write(screen.availHeight + '\n');
document.write(screen.orientation.type + '\n');

let btn_reload = document.getElementById('reload');
btn_reload.onclick = function(){
    window.location.reload();
    btn_reload.style.backgroundColor = 'cyan';
    
}