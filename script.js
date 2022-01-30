function CalculaImc() {
    document.getElementById("formulario"); //pega o elemento do formulario;
    var peso = parseFloat(formulario.peso.value); //pega o valor do input do formulario converte para float;
    var altura = parseFloat(formulario.altura.value);

    var altura = altura / 100; //conversao de cm para metros
    var alturaQ = altura * altura;
    var imc = peso / alturaQ; //calculo do imc/formula;

    if (altura > 0)
        Condicao(imc);
    else
        alert("Os valores inseridos são inválidos!");
}

function Condicao(imc) { //condicao que avalia o estado do usuario e retorna mensagem
    if (imc < 20) {
        alert("Você esta abaixo do peso! - IMC: " + imc.toFixed(2)); //
    } else if (imc >= 20 && imc <= 25) {
        alert("Você esta com o peso Ideal - IMC: " + imc.toFixed(2)); //
    } else if (imc > 25 && imc <= 30) {
        alert("Você esta com sobrepeso! - IMC:" + imc.toFixed(2)); //
    } else if (imc > 30 && imc <= 35) {
        alert("Você está com obesidade moderada! - IMC: " + imc.toFixed(2)); //
    } else if (imc > 35 && imc <= 40) {
        alert("Você está com obesidade severa! - IMC: " + imc.toFixed(2)); //
    } else {
        alert("Você esta com obesidade morbida! - IMC: " + imc.toFixed(2)); //
    }
}