let i = 1;
let hello = setInterval(() => {
    document.write('hello');
    if(i == 4)
        clearInterval(hello);
    i++;
}, 1500);