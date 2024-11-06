//Use query Selectors to get the class of all the button shapes
const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light'); 
const partyLight = document.querySelector('.party-light'); 


//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.
const redSwitch = document.getElementById('red-switch');
const yellowSwitch = document.getElementById('yellow-switch');
const greenSwitch = document.getElementById('green-switch'); 
const partySwitch = document.getElementById('party-switch');


redSwitch.addEventListener('click', () => {
    redLight.style.backgroundColor = 'red';
});

yellowSwitch.addEventListener('click', () => {
    yellowLight.style.backgroundColor = 'yellow';
});

greenSwitch.addEventListener('click', () => {
    greenLight.style.backgroundColor = 'green';
});

//Add event listeners that listen for a button click
redSwitch.addEventListener('click', () => {
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = '#333';
    greenLight.style.backgroundColor = '#333';
});

yellowSwitch.addEventListener('click', () => {
    yellowLight.style.backgroundColor = 'yellow';
    redLight.style.backgroundColor = '#333';
    greenLight.style.backgroundColor = '#333';
});

greenSwitch.addEventListener('click', () => {
    greenLight.style.backgroundColor = 'green';
    yellowLight.style.backgroundColor = '#333';
    redLight.style.backgroundColor = '#333';
});

//Turn all lights on and off with their specific buttons

//Party Mode Button

partySwitch.addEventListener('click', () => {
    greenLight.style.backgroundColor = 'purple';
    yellowLight.style.backgroundColor = 'purple';
    redLight.style.backgroundColor = 'purple';
});

//Turn all lights on and off at once with a single button