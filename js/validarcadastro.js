document.getElementById('btnProximo').addEventListener('click', function() {
    
    document.getElementById('formCadastro').style.display = 'none';
    
    document.getElementById('formEndereco').style.display = 'block';
});

document.getElementById('btnVoltar').addEventListener('click', function() {
    
    document.getElementById('formEndereco').style.display = 'none';
  
    document.getElementById('formCadastro').style.display = 'block';
});

document.getElementById('btnProximo').addEventListener('click', function(e) {
    e.preventDefault();
    if(validarPrimeiraParte()) {
        document.getElementById('formCadastro').style.display = 'none';
        document.getElementById('formEndereco').style.display = 'block';
    }
});

function validarPrimeiraParte(){
    let isValid = true;
    const campos = {
        nome:{
            element: document.getElementById('nome'),
            regex: /^[a-zA-ZÀ-ú\s]{5,}$/,
            mensagem: 'Nome deve ter pelomenos 5caracteres'
        },
        email:{
            element: document.getElementById('email'),
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mensagem: 'E-mail inválido'
    },
        telefone:{
            element: document.getElementById('telefone'),
            regex:/^(\d{11}|\d{10})$/,
            mensagem: 'Telefone inválido'
        
    },
        senha:{
            element: document.getElementById('senha'),
            min: 6,
            mensagem: 'A senha deve ter no minimo 6 caracters'
        },
        confirmarSenha:{
            element: document.getElementById('confirma_senha'),
            matchWith: 'senha',
            mensagem: 'A senha e a confirmação de senha devem ser iguais'
        },
        data_nascimento:{
            element: document.getElementById('data_nascimento'),
            mensagem:'Data de nascimento Obrigátoria'
        },
        telefone:{
            element: document.getElementById('telefone'),
            regex:/^(\d{11}|\d{10})$/,
            mensagem: 'Telefone inválido (DDD + número)'
        }


};

document.querySelectorAll('.erro-validacao').forEach(erro => erro.remove());

for(const chave in campos){
    const campo = campos[chave];
    const value = campo.element.value.trim();

    if( chave === 'confirma_senha'){
        if(value !== document.getElementById(campo.matchWith).value){
            showError(campo.element, campo.mensagem);
            isValid = false;
        }
    }
}

}
