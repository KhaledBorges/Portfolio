function calcularImc(peso, altura) {
    peso= document.querySelector("#peso").value
    altura= document.querySelector("#altura").value

    peso= parseInt(peso)
    altura= parseFloat(altura)
    
    let alturaCalculo= altura * altura


    let IMC= peso/alturaCalculo
    IMC= parseInt(IMC)
    alert (`Seu IMC é ${IMC}`)
}