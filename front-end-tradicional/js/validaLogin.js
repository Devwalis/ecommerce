
const configValidacaoLogin = {
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        mensagem: 'Email invalido'
    },
    senha: {
        min: 6,
        mensagem: 'A senha deve ter no mínimo 6 caracteres' 
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

const validarLogin = () => {
    limparErrosLogin();
    let isValid = true;

    const emailInput = document.getElementById('email');
    if(!configValidacaoLogin.email.regex.test(emailInput.value.trim())){
        mostrarErroLogin(emailInput, configValidacaoLogin.email.mensagem);
        isValid = false;
    }
    const passwordInput = document.getElementById('password');
if(passwordInput.value.length < configValidacaoLogin.senha.min){
    mostrarErroLogin(passwordInput,configValidacaoLogin.senha.mensagem);
    isValid = false;

}
return isValid;
};

const realizarLogin = async(event) => {
    event.preventDefault();

    const button = document.getElementById('btnProximo');
    button.disabled = true;
    button.innerHTML = 'Carregando... <span class="spinner"></span>';



    if(!validarLogin()) return;

    const loginData = {
        username: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    try{
        const response = await fetch ('http://localhost:8081/auth/login',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(loginData)
        });
        if(!response.ok){
            throw new Error('Credenciais inválidas');
        }

        const data = await response.json();

        
        localStorage.setItem('jwtToken', data.token);
        localStorage.setItem('userType', data.tipoUsuario);

        
       
        switch(data.tipoUsuario.toUpperCase()){
            case 'CLIENTE':
                window.location.href = 'ClienteAuth.html';
                break;
            case 'FORNECEDOR':
                window.location.href = '#fornecedor';
                break;

            case 'ADMINISTRADOR':
                window.location.href ='#admin';
                break;
                default:
                    console.error('tipo de usuario desconhecido', data.tipoUsuario);
                    window.location.href ='login.html';
        }
        

    } catch(error){
        
        alert(error.message || 'Erro ao realizar login');

    }

    finally{
        button.disabled = false;
        button.innerHTML = '<img src="image/iconbutton.png" class="iconbutton" alt="">Entrar';
    }
};

document.getElementById('loginForm').addEventListener('submit', realizarLogin);



