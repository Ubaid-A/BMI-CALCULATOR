function bmi() {
    const h = document.getElementById('height').value;
    const w = document.getElementById('weight').value;
    const meter = Number(h) * 0.3048;

    if(h== '' || w == ''){
        document.getElementById('result').innerHTML = ``;
        document.getElementById('error').innerHTML = `Please Enter height and weight`
    }else {
        document.getElementById('error').innerHTML = ``;
        const bmi = (Number(w) / (meter * meter)).toFixed(2);
        // const total = bmi.toFixed(2);
        document.getElementById('result').innerHTML = `Your BMI is ${bmi}`
    }
}

