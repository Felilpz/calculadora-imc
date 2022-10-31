/*
Menor que 18,5 abaixo do peso normal
25 - 29,9 excesso de peso
30 - 34,9 Obesidade classe 1
35 - 39,9 Obesidade classe 2
Maior ou igual a 40 obesidade classe 3
*/

function calcular() {
    let altura = (Number(window.document.getElementById('alturaForm').value))/100
    let peso = Number(window.document.getElementById('pesoForm').value)
    let res = window.document.getElementById('resultado')
    let changeImage = window.document.getElementsByClassName('ImgSide')
    let imc = peso / (altura * altura)

    if(imc < 18.5) {
        res.innerHTML = `Seu IMC é <strong>${imc.toFixed(1)}</strong>, você está com o <strong>Peso abaixo do normal</strong>`
    }  else if (imc < 24) {
        res.innerHTML = `Seu IMC é ${imc.toFixed(1)} , você está com um <strong>Bom peso.</strong>`
    } else if (imc < 29.9) {
        res.innerHTML = `Seu IMC é ${imc.toFixed(1)}, você está com <strong>Sobrepeso.</strong>`
    } else if (imc <= 39.9) {
        res.innerHTML = `Seu IMC é ${imc.toFixed(1)}, você está com <strong>Obesidade!</strong>`
    } else if (imc > 39.9) {
        res.innerHTML = `Seu IMC é ${imc.toFixed(1)}, você está com <strong>Obesidade mórbida!!!</strong>`
    } else {
        res.innerHTML = `Resultado inválido, talvez você tenha digitado algo de errado!`
    }
}

function aviso() {
    window.alert(
       " O IMC apresenta algumas falhas. O principal problema é que ele não indica a distribuição da gordura no corpo, um fator primordial para avaliar o sobrepeso. Além desse problema, o IMC não consegue indicar a relação entre massa gorda e magra."
    )
}
