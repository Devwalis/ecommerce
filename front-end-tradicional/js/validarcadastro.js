
const configValidacao = {
    camposPrimeiraParte:{
        nome:{
            regex: /^[a-zA-ZÀ-úçÇãÃõÕâÂêÊîÎôÔûÛáÁéÉíÍóÓúÚ\s]{5,}$/,
            mensagem:'Nome de ter pelo menos 5 caracteres'

        },
        email:{
            regex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mensagem:'E-mail inválido'
        },
        telefone:{
            regex:/^(\d{10,11})$/,
            mensagem:'Telefone inválido'

        },
        senha:{
            min: 6,
            mensagem: 'A senha deve ter no mínimo 6 caracteres'
        },
        dataNascimento:{
            mensagem: 'Data de nascimento obrigatória'
        },

        cpf: {
            regex: /^\d{11}$/,
            mensagem: 'CPF deve conter 11 digitos numéricos'
        }

    }
}


const mostrarErro = (input, mensagem) => {
    const divErro = document.createElement('div');
    divErro.className = 'erro-validacao';
    divErro.style.color = 'red';
    divErro.textContent = mensagem;
    input.parentNode.insertBefore(divErro, input.nextSibling);
};

const limparErros = () => {
    document.querySelectorAll('.erro-validacao').forEach(erro => erro.remove());

};

const validarPrimeiraParte =()=> {
    limparErros();
    let isValid = true;

    const campos = configValidacao.camposPrimeiraParte;

    const nomeInput = document.getElementById('nome');
    if (!campos.nome.regex.test(nomeInput.value.trim())){
        mostrarErro(nomeInput, campos.nome.mensagem);
        isValid = false;
    }

    const emailInput = document.getElementById('email');
    if(!campos.email.regex.test(emailInput.value.trim())){
        mostrarErro(emailInput, campos.email.mensagem);
        isValid = false;
    }
    const telefoneInput = document.getElementById('telefone');
    if(!campos.telefone.regex.test(telefoneInput.value.trim())){
        mostrarErro(telefoneInput, campos.telefone.mensagem);
        isValid = false;
    }
    const senhaInput = document.getElementById('senha');
        if(senhaInput.value.length < campos.senha.min){
            mostrarErro(senhaInput, campos.senha.mensagem);
            isValid = false;
        }
    const dataNascimentoInput = document.getElementById('dataNascimento');
    if(!dataNascimentoInput.value){
        mostrarErro(dataNascimentoInput, campos.dataNascimento.mensagem);
        isValid = false;
    }
    return isValid;
    
};
 

 
const enviarFormulario = async event =>{
    event.preventDefault();

    

    const dadosUsuario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value,
        tipoUsuario: document.getElementById('tipoUsuario').value,
           
        }
        
    


try{
    const response = await fetch('http://localhost:8081/usuarios/cadastrar', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(dadosUsuario)

    });
    const responseData = await response.json()
    console.log('Resposta do servidor:', responseData);
    if(!response.ok) throw new Error('Erro ao cadastrar usuário');

    window.location.href = 'login.html';

}catch (error){
    console.error('Erro:', error);
    alert(error.message);
};



};

//eventos que vão escutar os clicks


document.getElementById('formCadastro').addEventListener('submit', enviarFormulario);




