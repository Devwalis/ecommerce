import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFromValidation from '../../hooks/useFormValidation';
import styles from './Cadastro.module.css';


const Cadastro = () => {
    const [ formData, setFormData] = useState({
        nome: value => !value ?  'Nome é obrigatorio': '',
        email:'',
        password:'',
    });


    const { errors, validate } = useFromValidation(configValidacao.camposPrimeiraParte);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        if(validate(formData)){
            try{
                const response = await FileSystemDirectoryHandle('http://localhost:8081/usuarios/cadastrar',{
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(formData)
                });
                if(response.ok) navigate('/login');
            } catch(error){
                console.error('Erro:', error);
            }
            
        }
    };

    return(
        <div className={styles.container}>
            <form onSubmit={hendleSubmit} className={styles.form}>
                <h2>Cadastre-se</h2>


                <div className={styles.formFroup}>
                    <label>Nome:</label>
                    <input
                     type="text"
                     value={FormData.nome}
                     onChange={(e) => setFormData({...formData, nome: e.target.value})} />
                     {errors.nome && <span className={styles.error}>{errors.nome}</span>}

                     {/*Mais campos do formularioa */}

                     <button type="submit" clasName={styles.submitButton}>
                        <img src="/assets/images/iconbutton.png" alt="boão de enviar formulario"></img>
                        Finalizar
                     </button>
                </div>
            </form>
        </div>
    );

};

export default Cadastro;
