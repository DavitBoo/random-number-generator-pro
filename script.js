let input;
let times;

const inputElement = document.getElementById('input');
const timesElement = document.getElementById('times');
const outputElement = document.getElementById('output');
const startBtn = document.getElementById('start');


inputElement.addEventListener('change', () => {
  input = parseInt(inputElement.value);
  console.log(input)
})    

timesElement.addEventListener('change', () => {
  times = parseInt(timesElement.value);
  console.log(times)
})

let myNum = [];

startBtn.addEventListener('click', () => {
  outputElement.value = start().sort((a, b) => a - b)
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

function start(){
    for (let i = 1; i <= times; i++) {
      myNum.push(getRandomInt(1, input+1))
    }
    console.log(myNum)
    return myNum;
}

 
  