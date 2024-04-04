let container = document.createElement('div');
document.body.appendChild(container);
let names = ['Mahmoud Ahmed Abdel aal', 'Mosque', 'Basel', 'Wael Ghoneim']
let ages = [20, 1290, 24, 25];
let image_sources = ['profile250_456.png', 'mosque.png', 'Basel.png', 'Wael Ghoneim.png']

let createCards = function(name_parameter = 'Mahmoud Ahmed', age_parameter = 20, image_source_parameter = 'profile500px.png'){
    
    document.body.style.textAlign = 'center';
    //!create the elements 
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let age = document.createElement('p');
    let image = document.createElement('img');


    //! add the content
    let name_content = document.createTextNode(`Name: ${name_parameter}`);
    let age_content = document.createTextNode(`Age: ${age_parameter} years old`);
    image.src = image_source_parameter;

    //! append the child
    name.appendChild(name_content);
    age.appendChild(age_content);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(age);
    container.appendChild(card);

    //! style the card and it's content
    card.style.backgroundColor = '#123';
    card.style.width = '200px';
    card.style.height = '250px';
    card.style.borderRadius = '5px';
    card.style.boxShadow = '5px 5px  5px #11223355';
    card.style.fontSize = '10px';
    card.style.color = '#fff';
    card.style.fontFamily = 'sans-serif';
    card.style.fontStyle = 'italic';
    image.style.width = '40%';
    image.style.height = '40%';
    card.style.padding = '10px';
    image.style.borderRadius = '10px';
    card.style.display = 'inline-block';
    card.style.margin = '5px';
    
}

for(let x = 0; x < names.length; ++x){
    createCards(names[x], ages[x], image_sources[x]);
}
