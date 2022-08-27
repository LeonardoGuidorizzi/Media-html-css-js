//O resultado do "resultEvarage" retorta o resultado dele no id "result" que é
//o valor que o usuario colocou
const resultadoMedia = document.getElementById ('result')

function mediaNotas(e){
 const primeiroNumero = parseInt(document.getElementById('numeroUm').value)
 const segundoNumero = parseInt(document.getElementById('numeroDois').value)
 const terceiroNumero = parseInt(document.getElementById('numeroTres').value)
 const quartoNumero = parseInt(document.getElementById('numeroQuatro').value)
 const resultEvarage= (primeiroNumero+segundoNumero+terceiroNumero+quartoNumero)/4

 //resultadoMedia.textContent = resultEvarage
if(resultEvarage >= 5){
    resultadoMedia.textContent= `aprovado, a sua nota é ${resultEvarage}`
}else{
    resultadoMedia.textContent= `reprovado, a sua nota é ${resultEvarage}`
}
 
 
}
//o botão esta sendo chamado pelo id "resultado"
document.getElementById('resultado').addEventListener('click', mediaNotas)

