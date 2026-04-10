let display = document.getElementById("display");



function appendValue(value) {

    if (display.value === "0") {

        display.value = value;
    } 

    else {

        display.value += value;
    }

}


function clearDisplay() {

    display.value = "0";
}


function deleteLast() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {

        display.value = "0";

    }

}


function calculate() {

    try {

        display.value = eval(display.value);

    } 
    catch {

        display.value = "Error";

    }

}


function appendBracket() {

    let value = display.value;

    let open = (value.match(/\(/g) || []).length;

    let close = (value.match(/\)/g) || []).length;

    if (open > close) {

        display.value += ")";

    } 

    else {

        display.value += "(";
    }

}


function calculate() {

    try {

        let expression = display.value;

        
        expression = expression.replace(
            
            /(\d+(\.\d+)?)%(\d+(\.\d+)?)/g,
            "($1/100)*$3"
        );

       
        expression = expression.replace( /(\d+(\.\d+)?)%/g,"($1/100)"
           
        );

        display.value = eval(expression);

    } 
    catch {

        display.value = "Error";

    }

}



document.addEventListener("keydown", function(event) {

    let key = event.key;

    if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", ".", "%", "(", ")"].includes(key)) {

        appendValue(key);
    }

    
    else if (key === "Enter") {

        event.preventDefault(); 

        calculate();
    }

    
    else if (key === "Backspace") {

        deleteLast();
    }


    else if (key === "Escape") {

        clearDisplay();
    }
});