// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input1 = document.getElementById('userInput1');
const copyButton = document.getElementById('copy');
const outputDiv = document.querySelector('.output');

// add an event listener on the target element
copyButton.addEventListener('click', () => {
  // callback function to handle event
  outputDiv.textContent = input1.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input2 = document.getElementById('userInput2');

// create the output element dynamically and append it
const inputEventSection = document.getElementById('inputEventExample');
const inputOutput = document.createElement('div');
inputOutput.classList.add('output');
inputEventSection.appendChild(inputOutput);

// add an event listener on the target element
input2.addEventListener('input', () => {
  // callback function to handle event
  inputOutput.textContent = input2.value;
});
