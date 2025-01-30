
function validarPrimeiraParte() {
    let isValid = true;
    
    
    const campos = {
        nome: {
            element: document.getElementById('nome'),
            regex: /^[a-zA-ZÀ-ú\s]{5,}$/,
            mensagem: 'Nome deve ter pelo menos 5 caracteres'
        },
        email: {
            element: document.getElementById('email'),
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mensagem: 'E-mail inválido'
        },
        telefone: {
            element: document.getElementById('telefone'),
            regex: /^(\d{10,11})$/, 
            mensagem: 'Telefone inválido (DDD + número)'
        },
        senha: {
            element: document.getElementById('senha'),
            min: 6,
            mensagem: 'A senha deve ter no mínimo 6 caracteres'
        },
        confirmarSenha: { 
            element: document.getElementById('confirmar_senha'),
            matchWith: 'senha',
            mensagem: 'A senha e a confirmação devem ser iguais'
        },
        data_nascimento: {
            element: document.getElementById('data_nascimento'),
            mensagem: 'Data de nascimento obrigatória'
        }
    };

    
    document.querySelectorAll('.erro-validacao').forEach(erro => erro.remove());

    
    for(const chave in campos) {
        const campo = campos[chave];
        const value = campo.element.value.trim();

        if(chave === 'confirmarSenha') {
            const senhaValue = document.getElementById(campos.senha.element.id).value;
            if(value !== senhaValue) {
                showError(campo.element, campo.mensagem);
                isValid = false;
            }
        }
        else if(chave === 'senha') {
            if(value.length < campo.min) {
                showError(campo.element, campo.mensagem);
                isValid = false;
            }
        }
        else if(chave === 'data_nascimento') {
            if(!value) {
                showError(campo.element, campo.mensagem);
                isValid = false;
            }
        }
        else if(campo.regex && !campo.regex.test(value)) {
            showError(campo.element, campo.mensagem);
            isValid = false;
        }
    }

    return isValid;
}


function showError(input, mensagem) {
    const divErro = document.createElement('div');
    divErro.className = 'erro-validacao';
    divErro.style.color = 'red';
    divErro.textContent = mensagem;
    input.parentNode.insertBefore(divErro, input.nextSibling);
}


document.getElementById('btnProximo').addEventListener('click', function(e) {
    e.preventDefault();
    if(validarPrimeiraParte()) {
        document.getElementById('formCadastro').style.display = 'none';
        document.getElementById('formEndereco').style.display = 'block';
    }
});

document.getElementById('btnVoltar').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('formEndereco').style.display = 'none';
    document.getElementById('formCadastro').style.display = 'block';
});


async function consultaaCEP(cep){
    cep = cep.replace(/\D/g, '');

    if(cep.length !== 8){
        showError(document.getElementById('Cep'), 'CEP inválido');
        return;
    }

    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if(data.erro){
            throw new Error('CEP não encontrado');

        }

        document.getElementById('logradouro').value = data.logradouro || '';
        document.getElementById('bairro').value = data.bairro || '';
        document.getElementById('cidade').value = data.localidade || '';
        document.getElementById('Uf').value = data.uf || '';

        document.getElementById('complemento').focus();

    }catch (error){
        showError(document.getElementById('Cep'), error.message);
    }
}

function validarEndereco(){
    let isValid = true;
    const campos = {
        cep:{
            element: document.getElementById('Cep'),
            regex: /^\d{8}$/,
            mensagem: 'CEP inválido'
        },
        logradouro: {
            element: document.getElementById('logradouro'),
            mensagem: 'Logradouro obrigatório'
        },
        cidade: {
            element: document.getElementById('cidade'),
            mensagem: 'Cidade obrigatória'
        },
        Uf: {
            element: document.getElementById('Uf'),
            regex: /^[A-Z]{2}$/,
            mensagem: 'UF inválida (2 letras maiúsculas)'
        },
        bairro: {
            element: document.getElementById('bairro'),
            mensagem: 'Bairro obrigatório'
        }

    };



    for(const campo in campos){
        const config = campos[campo];
        const value = config.element.value.trim();

        if(!value){
            showError(config.element, config.mensagem);
            isValid = false;
        
        }
        else if(config.regex && !config.regex.test(value)){
            showError(config.element, config.mensagem);
            isValid = false;
        }
    }
    return isValid;
}
document.querySelectorAll('.erro-validacao').forEach(erro => erro.remove());

document.getElementById('Cep').addEventListener('blur', function(e){
    consultaaCEP(this.value);
});
document.getElementById('formEndereco').addEventListener('submit', function(e){
    e.preventDefault();

    if(validarEndereco()){
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }
});






