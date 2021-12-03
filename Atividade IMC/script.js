var peso;
var altura;
var imc;
var resultado;
var resultado1;

function calcular(event) {

    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultadoIMC');
    resultado.innerHTML = "O seu IMC é: " + imc.toFixed(2);

}