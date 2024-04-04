let container = document.createElement('div');
console.log(container);

let img_profile = document.createElement('img');
console.log(img_profile);
img_profile.src = 'profile500px.png';

let head = document.createElement('h1');
console.log(head);

let content = document.createTextNode(`Hi My Wife i don't know who are you and cause i know that you can be Renad if Allah Wills`);
console.log(content);

head.appendChild(content);
container.appendChild(head);
container.appendChild(img_profile);
document.body.appendChild(container);

console.log(container);

document.body.style.backgroundColor = 'gold';
container.style.padding = '30px';
container.style.margin= '-6px';

container.style.backgroundColor = '#123';
container.style.width = '103%';
container.style.position = 'absolute';
container.style.top = '-1%';
// container.style.left= '0%';
container.style.height = '100vh';
img_profile.style.border = '2px solid red';
img_profile.style.borderRadius = '10px';

head.style.cssText = `
    color: #fff;
    background-color: #124;
    font-family: sans-serif;

`