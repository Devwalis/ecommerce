
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


document.getElementById('email').addEventListener('input', function() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(this.value)) {
        showError(this, 'Email inválido');
    } else {
        const erro = this.nextElementSibling;
        if(erro && erro.classList.contains('erro-validacao')) {
            erro.remove();
        }
    }
});


