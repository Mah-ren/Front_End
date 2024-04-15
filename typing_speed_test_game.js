//! these are the variables of the form 
let first_name = document.querySelector('.first_name');
let last_name = document.querySelector('.last_name');
let username = document.querySelector('.username');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let send_btn = document.querySelector('.send_btn');

//! these are the variables of the game
let game = document.querySelector('.game');
function disapear_everything(){

    console.log('disapear the game the big container');
    game.classList.add('hide');
    
}
    
disapear_everything();



































let message = document.querySelector('.message1');
let start_btn = document.querySelector('.start');
let level_value = document.querySelector('.level_value');
let seconds_value = document.querySelector('.seconds_value');
let time_left = document.querySelector('.time_left');
let score = document.querySelector('.score');
let score_you_have = document.querySelector('.score_you_have');
let the_word = document.querySelector('.the_word');
let upcoming_words = document.querySelector('.upcoming_words');
let finish_message = document.querySelector('.finish_message');
let input = document.querySelector('.input');






//! storing the words in array 
let words = [
    "mahmoud",
    "ahmed",
    "abdel",
    "aal",
    "Hna",
    "Ali",
    "Abdel",
    "Hafez",
    "Hasan"
    // "ahmed",
    // "ali",
    // "ali",
    // "ahmed",
    // "ali",
    // "ahmed",
    // "ahmed",
    // "ahmed",
    // "mostafa",
    // "ahmed",
    // "mostafa",
    
    // "ahmed",
    // "mostafa",
    // "ahmed",
    // "mostafa",
    // "ahmed",
    // "ahmed",
    // "ahmed",
    // "mostafa",
    // "ahmed",
    // "mostafa"   
];

//! setting levels
const levels = {
    "Easy" : 5,
    "Normal" : 3,
    "Hard" : 2
};

//! setting the default level
let default_level_name = "Normal";
let default_level_seconds = levels[default_level_name];

//! the word that will be written

level_value.innerHTML = default_level_name;
seconds_value.innerHTML = default_level_seconds;
score_you_have.innerHTML = '95%';
finish_message.innerHTML = 'game over';
time_left.innerHTML = 3;
the_word.innerHTML = words[0];


//! disapear these things until you don't want to 
finish_message.classList.add('hide');
the_word.classList.add('hide');
score.classList.add('hide');


input.onpaste = function(){
    return false;
}

start_btn.onclick = function(){
    this.classList.add('hide');
    the_word.classList.remove('hide');

    input.focus();
    generateWords();
}

let generateWords = function(){
    
    let random_word = words[Math.floor(Math.random() * words.length)];
    let index_of_random_word = words.indexOf(random_word);
    words.splice(index_of_random_word, 1);
    the_word.innerHTML = random_word;    
    upcoming_words.innerHTML = '';
    for(let i = 0; i < words.length; ++i){
        let div = document.createElement('div');
        let span = document.createElement('span');
        let txt = document.createTextNode(words[i]);
        span.appendChild(txt);
        div.appendChild(span);
        upcoming_words.appendChild(div);
    }
    
    startPlay();

}

let startPlay = function(){

    let start = setInterval(() => {
            time_left.innerHTML--;
    }, 1000);
    
}

