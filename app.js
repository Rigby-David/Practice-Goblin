// import functions and grab DOM elements
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-HP');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');
// let state
defeatedGoblinCount = 0;
playerHP = 0;
let goblins = [
    { name: Stab, hp: 1 },
    { name: Stabby, hp: 5 },
];
// set event listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form)
    

}
    
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
