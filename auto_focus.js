let username = document.getElementById('username');
// let password = document.getElementById('password');
let btn_login = document.getElementById('btn_login');


onload = function(){
    // username.focus();
    btn_login.click();
}


btn_login.onclick = function(){
    username.focus();
}
