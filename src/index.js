import { sum } from './utils/math';

const container = document.createElement('div');
document.querySelector('body')?.appendChild(container);

// Output
const output = document.createElement('div');
output.innerText = 'Sum: ...';
output.classList.add('output');
container.appendChild(output);

// Inputs
const inputsContainer = document.createElement('div');
inputsContainer.classList.add('inputs');
container.appendChild(inputsContainer);

const inputFactory = () => {
    const input = document.createElement('input');
    input.classList.add('input');
    input.type = 'number';
    input.placeholder = 'Enter a number';
    input.addEventListener('change', () => {
        const values = [];
        document.querySelectorAll('.input').forEach((inp) => {
            const value = parseFloat(inp.value);
            if (Number.isFinite(value)) {
                values.push(value);
            }
        });
        output.innerText = `Sum: ${sum(values)}`;
    });
    return input;
};

// Add button
const addInputButton = document.createElement('button');
addInputButton.innerText = 'Add input';
addInputButton.addEventListener('click', () => inputsContainer.appendChild(inputFactory()));
container.insertBefore(addInputButton, inputsContainer);

// Start with two inputs
inputsContainer.appendChild(inputFactory());
inputsContainer.appendChild(inputFactory());
