function appendToDisplay(number) {
    const display = document.getElementById('display');
    display.value += number;
    console.log(number);
    console.log(display.value);
}

function calculate() {
    console.log("Inside calculate");
    const display = document.getElementById('display');
    console.log(display.value);
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay(){
    console.log("Inside clearDisplay");
    const display = document.getElementById('display');
    display.value = '';
}