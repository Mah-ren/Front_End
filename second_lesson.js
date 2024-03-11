document.write('Hello Renad i wanna get married to you, and i\'ll promise you that i\'ll do 10X of work and improving my self ');

console.log('Hello Renad i wanna get married to you, and i\'ll promise you that i\'ll do 10X of work and improving my self ');

//! splice() and slice()
//! splice can add and remove 
let arr = ['Mohamed Saleh', 'Alaa Saleh', 'Renad Saleh'];

for (let i = 0; i < arr.length; ++i) {
    console.log('index' + i + ': ' + arr[i]);
}

console.log('\n');

arr.splice(0,0, 'Mahmoud Ahmed');
for (let i = 0; i < arr.length; ++i) {
    console.log('index' + i + ': ' + arr[i]);
}

console.log('\n');

arr.splice(1,2);
console.log('this is the array after deleting alaa and mohamed saleh and Renad and I are together: ');
for (let i = 0; i < arr.length; ++i) {
    console.log('index' + i + ': ' + arr[i]);
}

console.log('\nthis is array after adding Mohamed Saleh at index 1');
arr.splice(1, 0, 'Mohamed Saleh');
for (let i = 0; i < arr.length; ++i) {
    console.log('index' + i + ': ' + arr[i]);
}

console.log('the slice function prints only: ');
console.log(arr.slice());

//* and slice can prints the indeces from specific index 
console.log(arr.slice(0,1));


//! reverse() & sort()

arr.reverse();
console.log(arr.slice());

//! and you can make it with this awsome way
console.log(arr.slice(arr.reverse()));
console.log(arr.slice(arr.reverse()));


console.log(arr.slice(arr.sort()));


let arr1 = ['Said Mohamed', 'Yousof Mohamed'];

arr = arr.concat(arr1); //! or you can paste this line in the console.log(arr.concat(arr1);) but here i assign the value of it in the arr

console.log('this is the arr1 ' + arr1);
console.log('this is the arr ' + arr.join());
console.log('this is the arr ' + arr.join('\n#'));


