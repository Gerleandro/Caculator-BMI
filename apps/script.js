// Função calcular() executa {}
function calc() {
    // variaveis peso e altura recebe .value 
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100 // altura divido por 100
// variavel bmi ou imc recebe peso divido por altura vezes altura
    var bmi = weight / (height ** 2);// altura duas vezes por 2
    var text = "";
    if (bmi < 18.5) {
        text = "you are underweight";
    } else if (bmi < 24.9) {
        text = "you are ideal weight";
    } else if (bmi < 29.9) {
        text = "you are overweight";
    } else if (bmi < 34.9) {
        text = "you have grade I obesity";
    } else if (bmi < 39.9) {
        text = "you have grade II obesity";
    } else if (bmi > 39.9) {
        text = "you have grade III obesity";
    } else {
        text = "Enter some value";
    }
    document.getElementById("text").innerText = text;
    document.getElementById("bmi").innerText = parseInt(bmi) + " BMI";
}

function clean() {
    var cleanHeight = document.getElementById("height");
    document.getElementById("height").value = "";
    var cleanWeight = document.getElementById("weight");
    document.getElementById("weight").value = "";
}