
const configValidacaoLogin = {
    email:{
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        mensagem: 'Email invalido'

    },
    senha:{
        min: 6,
        mensagem: 'A senha deve ter no mínimo 6 caracteres'

,
    }

};

const mostrarErroLogin = (input, mensagem) => {
    const divErro = document.createElement('div');
    divErro.className = 'erro-validacao';
    divErro.style.color = 'red';
    divErro.textContent = mensagem;
    input.parentNode.insertBefore(divErro, input.nextSibling);
};

const limparErrosLogin = () =>{
    document.querySelectorAll('.erro-validacao').forEach(erro => erro.remove());
    
}

