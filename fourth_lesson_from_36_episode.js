function calcAgeInDays(ageInYears) {
    return ageInYears * 365;
}
document.write('My age in Days: ' + calcAgeInDays(20))
console.log('My age in Days: ' + calcAgeInDays(20));


//! Hoisting ده درس ال 
//! في فرق بين المتغير var
//! let و المتغير 
//! var المترجم بيخليه في اول البرنامج و يعمله declaration
//! let زي اي لغة مش بيتعمله declaration 


//todo الفنكشن اللي من نوع declaration هي الفنكشن اللي فوق دي 
//todo لكن الفنكشن اللي من نوع expression هي الفنكشن اللي بيتم تخزين قيمتها داخل متغير 
let calcAgeInHours = function(age) {
    return (age * 365 * 24); 
}

//todo و الفنشكن اللي من نوع expression مش بيتم عمل declaration لها في اول البرنامج 


//! implementation الفرق بين الفنكشن اللي من نوع ديكليريشن و المتغير اللي من نوع ديكليريشن إنه الفنكشن لو استدعيتها فوق 
//! لكن المتغير هيديك undefined اقصد المتغير اللي من نوع var


//! و جوه الفور لووب var لو المتغير من نوع -> global variable

for(var i = 0; i < 3; ++i) {
    console.log(i);
}
console.log(i);


//! let لكن لو استخدمت -> local variable و هيطلعلك خطأ لو استدعيته خارج اللوب
for(let j = 0; j < 3; ++j) {
    console.log(j);
}
// console.log(j);

function multiplyArrayIndices(...numbers) {
    
    let result = 1;

    for (let i = 0; i < numbers.length; ++i) {
        result *= numbers[i]; 
    }
    return result;
}

console.log('this is the result of multiply 10, 20,30,40: ' + multiplyArrayIndices(10,20,30,40));


//! arrow functions
let mahmoud = function() {
    return 'Mahmoud';
}
console.log(mahmoud());

//! you can delete the word "function"
let mostafa = () => {
    return 'Mostafa';
}
console.log(mostafa());

//! you don't have to write the "()" just write "_" you don't have parameters 
let mohamed = _ => {
    return 'Mohamed';
}
console.log(mohamed());

//! you can remove the curly braces and return word if you have one line 
//! this function will return Yousof and '_' cause i don't have parameter, 
//! but if i have one i'll write it without the braces 
let yousof = _ =>  'Yousof';
console.log(yousof());

//! you have one parameter then you'll write it without the braces, but if you have more than one parameter then it's a must to write the braces
let NumberOfMinutesInHours = minutes => minutes / 60;
console.log(NumberOfMinutesInHours(120)); 

//! Object

let car = {
    
    title:'BMW',
    model:2024,
    color:['black', 'red', 'white'],
    price:500000,

    hello:function() {
        return 'hello';
    },

    world:_ => 'world'
}

console.log(car.hello() + ' ' + car.world());
//! you can do the same job by writing the properity in brackets
console.log(car['hello']() + ' ' + car['world']());

//! you can make an empty object and then fill it 
let user = {};
user.name = 'Mahmoud';
user['age'] = 25;
console.log(user.name);
console.log(user.age);

user['calcAgeInDays'] = age => age*365;
console.log(user.calcAgeInDays(20));

//! fill in object=person2 from object=person1
let person1 = { 

    name:'person1',
    getName:function() {
        return `hello ${this.name}`;
    } 

}

//! you can add another properity : 
let person2 = Object.create(person1);



//todo or you can modify it with this: person2.name = 'Abdel rahman';
console.log('this is person1: ' + person1.getName());
console.log('this is person2: ' + person2.getName());
console.log('this is the age of the person2: ' + person2.age);



//! object.assign(object1, object2, object3) add many objects as you want 
let big_object = Object.assign(user, person1, person2);
console.log(big_object);
console.log(big_object.name);
console.log(big_object.getName());

