//Use query Selectors to get the class of all the button shapes
const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light'); 
const onOffLight = document.querySelector('.onoff-light')


//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.
const redSwitch = document.getElementById('red-switch');
const yellowSwitch = document.getElementById('yellow-switch');
const greenSwitch = document.getElementById('green-switch'); 
const onOffSwitch = document.getElementById('onoff-switch')
const cycleSwitch = document.getElementById('cycle-switch');



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

//Turn all lights on and off with their specific buttons

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

//Party Mode Button

let currentLight = 'red'; // Init current light state 
let intervalId = null; 

function cycleLight(){
    redLight.style.backgroundColor = '#444'
    yellowLight.style.backgroundColor = '#444'
    greenLight.style.backgroundColor = '#444'
    if(currentLight === 'red'){
        redLight.style.backgroundColor = 'red';
        currentLight = 'yellow';
    } else if(currentLight === 'yellow'){
        yellowLight.style.backgroundColor = 'yellow';
        currentLight = 'green';
    } else {
        greenLight.style.backgroundColor = 'green'
        currentLight = 'red';
    }
}

cycleSwitch.addEventListener('click', () => {
    if(!intervalId){
        intervalId = setInterval(cycleLight, 1000); 
    }
});

//Turn all lights on and off at once with a single button

onOffSwitch.addEventListener('dblclick', () => {
    greenLight.style.backgroundColor = '#333';
    yellowLight.style.backgroundColor = '#333';
    redLight.style.backgroundColor = '#333';
});    

onOffSwitch.addEventListener('click', () => {
    greenLight.style.backgroundColor = 'green';
    yellowLight.style.backgroundColor = 'yellow';
    redLight.style.backgroundColor = 'red';
});

