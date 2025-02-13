
const configValidacao = {
    camposPrimeiraParte:{
        nome:{
            regex: /^[azA-ZÀ-ù\s]{5,}$/,
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
        }


    },
    camposEndereco: {
        cep: {
            regex: /^\d{8}$/,
            mensagem:'CEP inválido'
        },
        cidade:{
            mensagem: 'Cidade obrigatoria'
        },
        uf:{
            regex:/^[A-Z]{2}$/,
            mensagem:'UF inválida (2 letras maiúsculas'
        },
        bairro:{
            mensagem: 'Bairro obrigatório'
        }
    }
    };



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
 const consultarCEP = async cep =>{
    cep = cep.replace(/\D/g, '');
    const cepInput = document.getElementById('cep');


    if(cep.length !== 8){
        mostrarErro(cepInput, 'CEP inválido');
        return;
    }
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if(data.erro) throw new Error('CEP não encontrado');

        document.getElementById('logradouro').value = data.logradouro || '';
        document.getElementById('bairro').value = data.bairro || '';
        document.getElementById('cidade').value = data.localidade || '';
        document.getElementById('uf').value = data.uf || '';
        document.getElementById('complemento').focus();

    }catch(error){
        mostrarErro(cepInput, error.message);
    }
 };

 
const enviarFormulario = async event =>{
    event.preventDefault();

    if (!validarEndereco()) return;

    const dadosUsuario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value,
        tipoUsuario: document.getElementById('tipoUsuario').value,
            endereco: {
                cep: document.getElementById('cep').value,
                logradouro: document.getElementById('logradouro').value,
                uf: document.getElementById('uf').value,
                bairro: document.getElementById('bairro').value,
                cidade: document.getElementById('cidade').value,
                complemento: document.getElementById('complemento').value
        }
        
    }


try{
    const response = await fetch('http://localhost:8081/usuarios/cadastrar', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(dadosUsuario)

    });
    if(!response.ok) throw new Error('Erro ao cadastrar usuário');

    window.location.href = 'login.html';

}catch (error){
    console.error('Erro:', error);
    alert(error.message);
};

};

//eventos que vão escutar os clicks
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnProximo').addEventListener('click', e => {
        e.preventDefault();
        if(validarPrimeiraParte()){
            document.getElementById('formCadastro').style.display = 'none';
            document.getElementById('formEndereco').style.display = 'block';

        }
    });
    document.getElementById('btnVoltar').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('formEndereco').style.display = 'none';
        document.getElementById('formCadastro').style.display = 'block';
});

document.getElementById('cep').addEventListener('blur', e =>  {
    consultarCEP(e.target.value);


});
document.getElementById('formEndereco').addEventListener('submit', enviarFormulario);

});


