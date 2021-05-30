document.querySelector('.calculate-btn').addEventListener("click", function() {
    let mass = document.querySelector('#mass').value;

    let height = document.querySelector('#height').value;

    mass = parseFloat(mass);;
    height = parseFloat(height);

    let BMI = mass / height ** 2;

    document.querySelector('.result').innerHTML = "Your BMI is: " + BMI.toFixed(2);

    if(BMI < 18.5) {
        document.querySelector('.message').innerHTML = " You are <u>Underweight</u>";
    }
    else if(BMI > 18.5 && BMI < 24.9) {
        document.querySelector('.message').innerHTML = " You are <u>Normal</u>";
    }
    else if(BMI > 25&& BMI < 29.9) {
        document.querySelector('.message').innerHTML = " You are <u>Overweight</u>";
    }
    else if(BMI > 30) {
        document.querySelector('.message').innerHTML = " You are <u>Obese</u>";
    }
})



