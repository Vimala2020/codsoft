let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let currentInput = '';
let operator = '';
let previousInput = '';

// Function to evaluate and display the result
function evaluate() {
    if (previousInput && currentInput && operator) {
        try {
            let result = eval(previousInput + operator + currentInput); // Calculate result
            display.innerText = result; // Display result
            // Reset inputs for further operations
            previousInput = '';
            currentInput = result; // Set result as current input for further calculations
            operator = '';
        } catch (error) {
            display.innerText = "Error"; // Display error for invalid calculations
        }
    }
}

// Event listeners for button clicks
buttons.map(button => {
    button.addEventListener("click", (e) => {
        let btnValue = e.target.innerText; // Get button value

        switch (btnValue) {
            case 'C': // Clear all
                display.innerText = '0';
                currentInput = "";
                previousInput = "";
                operator = '';
                break;

            case '=': // Calculate the result
                evaluate(); // Call evaluate function
                break;

            case '+':
            case '-':
            case '*':
            case '/':
                // Only set operator if current input is not empty
                if (currentInput !== '') {
                    operator = btnValue; // Set operator
                    previousInput = currentInput; // Save current input as previous
                    currentInput = ''; // Reset current input for next value
                    display.innerText = previousInput + " " + operator; // Show current operation
                }
                break;

            default: // Handle number inputs
                // Prevent multiple leading zeros
                if (currentInput === '0' && btnValue !== 'C') {
                    currentInput = btnValue; // Replace zero with the new number
                } else {
                    currentInput += btnValue; // Append number to current input
                }
                display.innerText = currentInput; // Update display
        }
    });
});

// Event listener for the clear button
document.getElementById('btn').addEventListener('click', () => {
    display.innerText = '0';
    currentInput = '';
    previousInput = '';
    operator = '';
});
