const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContentn = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao')

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContentn = tamanhoSenha;
}
function aumentaTamanho(){
   tamanhoSenha = tamanhoSenha+1;
   numeroSenha.textoContent = tamanhoSenha
}
console.log(botoes);