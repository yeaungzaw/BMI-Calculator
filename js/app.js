// select
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calcBtn = document.getElementById("calcBtn");
const output = document.getElementById("output");
const note = document.getElementById("note");
const weightUnitInput = document.getElementById("weightUnitInput");
const heightUnitInput = document.getElementById("heightUnitInput");

// function

const feetToCentimeter = (str) => {
    let ft = parseInt(str.split("'")[0]);
    let inch = parseInt(str.split("'")[1]);
    return (ft * 30.48) + (inch * 2.54);
}

const lbToKg = (lb) => {
    return lb * 0.45;
} 

const clearAll = () => {
    weightInput.value = "";
    heightInput.value = "";
}

const calcBmi = (w, h, unit1, unit2) => {

    if (unit1.value === 'lb') {
        w.value = lbToKg(w.valueAsNumber);
    }

    if (unit2.value === 'ft') {
        h.value = feetToCentimeter(h.value);
    }

    if (!
        (((w.value === '') && (h.value === '')) 
        || 
        ((w.value === '0') && (h.value === '0')))
        ) {        
        const result = w.value / ((h.value / 100) ** 2);
        output.innerText = result.toFixed(2);
        checkBmi();
    }

    clearAll();
}

const checkBmi = () => {
    if (output.innerText < 18.5) {
        output.innerHTML = `<h1 style="color:blue">${output.innerText}</h1>`
        note.innerHTML = `<p style="color:blue">(You are Underweight)<p>`
    } else if (output.innerText >= 18.5 && output.innerText <= 25) {
        output.innerHTML = `<h1 style="color:green">${output.innerText}</h1>`
        note.innerHTML = `<p style="color:green">(You are Normal)<p>`
    } else {
        output.innerHTML = `<h1 style="color:red">${output.innerText}</h1>`
        note.innerHTML = `<p style="color:red">(You are Overweight)<p>`
    }
}

calcBtn.onclick = () => {
    calcBmi(weightInput, heightInput, weightUnitInput, heightUnitInput);
}