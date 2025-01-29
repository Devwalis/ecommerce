document.getElementById('btnProximo').addEventListener('click', function() {
    
    document.getElementById('formCadastro').style.display = 'none';
    
    document.getElementById('formEndereco').style.display = 'block';
});

document.getElementById('btnVoltar').addEventListener('click', function() {
    
    document.getElementById('formEndereco').style.display = 'none';
  
    document.getElementById('formCadastro').style.display = 'block';
});

function validaNome(){
    var nome = document.getElementById('nome').value;
    if(nome.length < 10){
        alert('O nome deve ter pelo menos 10 caracteres');
        return false;
}
}




