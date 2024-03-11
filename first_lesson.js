// onload function to change the color of h5 tag
window.onload = function() {
document.querySelector('h5').style.color = 'red';
}

// print in html lesson3
document.write("hello html");

// print in the console
console.log('hello console');

// pop up a notification
// window.alert('hello window ');

// concatination +
// old way
let name = "Mahmoud Ahmed";
let age = 20;
console.log('this is the old way: My name is' + ' ' + name + 'and my age is ' + age);

// modern way
console.log(`this is modern way: my name is ${name} and my age is ${age}`);

// calculation
let num = 10;
console.log(num++);
console.log(num);

// converting the text to number
console.log(+'5' + +'4');
console.log('5' - '4');
console.log('5' * '4');
console.log('5' / '4');
console.log('if you added a number to string, it\'ll give you a Not a Number like this: = ');
console.log('5' - 'ahmed');

// other ways to convert the '59' to 59
console.log("this is the first way which is to put a plus sign before the '8' : \n");
console.log(+'8.5');

console.log("this is the second way which is to put the '8' in the Number() : \n");
console.log(Number('8.5'));

console.log("this is the third way which is to put the '8' parseInt() : \n");
console.log(parseInt('8.5'));

console.log("this is the third way which is to put the '8' parseFloat() : \n");
console.log(parseFloat('8.5'));

// ways to convert the number to string
let x = 10;
console.log(typeof toString(x));

// another way to convert the number to string to put the number between braces and then dot toString()
console.log(typeof (100).toString());

// another way to convert the number to string: to write the number and then two dots toString()
console.log(typeof 100..toString());

// string object
let names = 'Mahmoud Ahmed';
console.log(names.length);

// [] if the index is not found it'll print undefined 
console.log(names[100]);

// charAt() if the index is not found it'll not print anything
console.log('this is the charAt() ' + names.charAt(100));

// indexOf() to search for a char
let variable = names.indexOf('h');
console.log('this will give you the index of the second h:' + names.indexOf('h', variable));

// indexOf() to search for a char from the left direction but the lastIndexOf() searches from the right direction 
// and give you the number of the index from the right 
console.log('this will give you the index of the first h from the right direction :' + names.lastIndexOf('h'));

// and they return -1 if the char is not found and includes() return false if the char is not found 
// indexOf() take one argument obligatory and the start is obtional
console.log('it\'ll give you -1 : ' + names.indexOf('z', 3));
console.log('it\'ll give you -1 : ' + names.lastIndexOf('z', 3));
console.log('it\'ll give you false : ' + names.includes('z'));

// slice takes two arguments it doesn't include the second argument
console.log('this is the slice function it\'ll cut from the 0-9: ' + names.slice(0, 9));

console.log('this is the split function: it cuts the string by spaces and it\'ll put it in array: ');
console.log(names.split(' '));



//todo slice() and substring() take the start and the end and substr() take the start and the length
//todo can take negitave number and i'll start from the end fo the string 
console.log('this is string from the -5 and if i didn\'t write the end of the string it\'ll give me the everything from the start but if i write -1 it\'ll give me Ahme: ');
console.log(names.slice(-5));
console.log(names.slice(-5, -1));

//todoo but you can't put a negitave index in the substring()
console.log(names.substring(5, 1));
console.log(names.substring(-5, -1));

//todo substr() takes the start and the length 
console.log("this is the substr() function i\'ll give it the start 0 and the length 7: ");
console.log(names.substr(0, 7));

//todo startwith() is this string start with M -> true , with z -> false and it can take another argument which is obtional = index of the char 
//todo and then it checks if this char is the same as the second argument 
console.log(names.startsWith('M'));
console.log(names.startsWith('A', 8));
console.log(names.startsWith('a', 8));

//todo endswith() and the second is length not index
console.log('this is endswith function() : ' + names.endsWith('d'));
console.log('this is endswith function() : ' + names.endsWith('d', 7));
console.log('this is endswith function() : ' + names.endsWith('d', 5));

//! array
let arr = [['Mahmoud', 'Mohamed', 'Mostafa'], ['Yousof', 'Ahmed', 'Mariam'], ['Anas', 'Sarah', 'Hafsa']];

for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; j++) {
        console.log('Index' + i + ': ' + arr[i]);
    }
}


console.log('this is the array after pushing Renad at the end: \n');

let arrNames = ['Mohamed', 'Alaa'];
arrNames.push('Renad');

for (let k = 0; k < 3; k++) {
    console.log('this is the index' + k + ': ' + arrNames[k]);
}

arrNames.unshift('Mahmoud');
console.log('this is the array after pushing Mahmoud at the beginning: \n');
for (let k = 0; k < 4; k++) {
    console.log('this is the index' + k + ': ' + arrNames[k]);
}

//todo you can store the value of the index that you'll shift and that you'll pop

console.log('this is the array after poping and this is the value of the index that i\'ll pop = ' + arrNames.pop());
for (let k = 0; k < 3; k++) {
    console.log('this is the index' + k + ': ' + arrNames[k]);
}

console.log('this is the array after shifting and this is the value of the index that i\'ll shift = ' + arrNames.shift());
for (let z = 0; z < 2; z++) {
    console.log('this is the index' + z + ': ' + arrNames[z]);
}

// for (let m = 0; m < arrNames.length; m++) {
//     console.log('this is the index using arrNames.length' + m + ': ' + arrNames[m]);
// }

// // console.log(arrNames.slice());
// //todo splice takes two arguments if you wanna remove only and more than two if you wanna add or (remove & add)
// // arrNames.splice()


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
