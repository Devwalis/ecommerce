
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
    