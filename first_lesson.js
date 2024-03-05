onload = function(){

    document.querySelector('h5').style.color = 'red';
}

//! print in html   lesson3  
document.write("hello html");


//! print in the console
console.log('hello console');


//! pop up a notification 
// window.alert('hello window ');

//! concatination +
//* this is the old way
let name = "Mahmoud Ahmed";
let age = 20;
console.log('this is the old way: My name is' + ' ' + name + 'and my age is ' + age);

//* this is modern way 
console.log(`this is modern way: my name is ${name} and my age is ${age}`);

//! calculation
let num = 10;
console.log(num++);
console.log(num);


//! converting the text to number
console.log(+'5' + +'4');
console.log('5' - '4');
console.log('5' * '4');
console.log('5' / '4');
console.log('if you added a number to string, it\'ll give you a Not a Number like this: = ');
console.log('5' - 'ahmed');

//! other ways to convert the '59' to 59
console.log("this is the first way which is to put a plus sign before the '8' : \n");
console.log(+'8.5');

console.log("this is the second way which is to put the '8' in the Number() : \n");
console.log(Number('8.5'));

console.log("this is the third way which is to put the '8' parseInt() : \n");
console.log(parseInt('8.5'));

console.log("this is the third way which is to put the '8' parseFloat() : \n");
console.log(parseFloat('8.5'));


//! ways to convert the number to string 
let x = 10;
console.log(typeof toString(x));

//* another way to convert the number to string to put the number between braces and then dot toString()
console.log(typeof (100).toString());

//* another way to convert the number to string: to write the number and then two dots toString()
console.log(typeof 100..toString());