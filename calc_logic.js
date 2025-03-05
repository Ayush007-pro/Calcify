let display_input = document.getElementById(`input_box`);
let my_buttons = document.querySelectorAll(`button`);

let display_string = "";

const operators = new Set(['.', '/', '*', '%', '+', '-']);

let arr = Array.from(my_buttons);

arr.forEach(button => {
    button.addEventListener(`click`, (k) => {
        const buttonElement = k.target.closest('button');
        const value = buttonElement ? buttonElement.dataset.action || buttonElement.innerHTML : '';

        if (value == `=`){
            try {
                display_string = eval(display_string).toString();
            } catch (error) {
                display_string = `Error`;
            }
            display_input.value = display_string;
        }
        else if (value == `AC`){
            display_string = ``;
            display_input.value = display_string;
        }
        else if (value == `DEL`){
            display_string = display_string.slice(0, -1);
            display_input.value = display_string;
        }
        else if (value == `±`){
            if (display_string.charAt(0)==`-`){
                display_string = display_string.slice(1);
            }
            else{
                display_string = `-` + display_string;
            }
            display_input.value = display_string;
        }
        else {
            if (operators.has(value)) {
                if (display_string.length > 0) {
                    const lastChar = display_string.slice(-1);
                    if (operators.has(lastChar)) {
                        display_string = display_string.slice(0, -1) + value;
                    } else {
                        display_string += value;
                    }
                } else {
                    display_string += value;
                }
            } else {
                display_string += value;
            }
            display_input.value = display_string;
        }

        if (display_string == `Infinity` || display_string == `-Infinity`){
            display_string = `Can't divide by zero`;
            display_input.value = display_string;
        }
    });
});