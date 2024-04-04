
document.write('ازيك يا ريناد');
for (let i = 0; i < 3; i++) {
    
    let prompt_email = prompt('Enter Your Email\\UserName: \n');
    let right_email = 'om';
    
    let prompt_password = prompt('Enter Your Password: \n');
    let right_password = '011';
    
    if (prompt_email.toUpperCase().trim == right_email.toUpperCase().trim && prompt_password.toUpperCase().trim == right_password.toUpperCase().trim) {
        console.log('true.');
        alert('Login successed!');
    }
    else{
        console.log('false.');
        alert('email or password is invalid!\nPlease try again :-)');
    }
}


//! there is a difference between =, == and === 
//todo = assign a value to a variable
//todo == compare two values and it doesn't checks the datatype so 5 == '5' is true and it's different from c++ and c and maybe c# too

if (5 == '5')
    document.write('true');
else
    document.write('false');

//! checks if the datatype is the same
if (5 === '5')
    document.write('true');
else
    document.write('false');

// ! the different between the switch and if is that switch is comparing the equality i mean that you write the variable after switch 
//! between the braces and you check if the value in the case == variable but you can't check if the variable >= value 
//! but you can do this with if 