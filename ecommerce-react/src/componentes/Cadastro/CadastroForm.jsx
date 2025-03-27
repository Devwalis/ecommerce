import React from 'react';
import { useForm } from '../../hooks/useForm';
import styles from './CadastroForm.module.css';
import validationSchema from './validationSchema';

const CadastroForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      nome: '',
      email: '',
      senha: '',
      dataNascimento: '',
      telefone: '',
      cpf: '',
      tipoUsuario: 'cliente'
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:8081/usuarios/cadastrar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });
        
        if (!response.ok) throw new Error('Erro no cadastro');
        // Redirecionar para login
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  });

  return(
    <form onSubmir={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Criar Nova Conta</h2>

      <div className={styles.formGroup}>
        <label>Nome Completo</label>
        <input
        type='text'
        name='nome'
        value={values.nome}
        onChange={handleChange}
        className={errors.nome ? styles.errorInput :''}
        ></input>
        {errors.nome && <span className={styles.error}>{errors.nome}</span>}

        <label htmlFor="">Cpf</label>
        <input type="text" 
        name='cpf'
        value={values.cpf}
        onChange={handleChange}
        className={errors.cpf ? styles.errorInput :''}
        />
        {errors.cpf && <span className={styles.error}>{errors.cpf}</span>}


        <label htmlFor="">Data de Nascimento</label>
        <input
         type="date"
        value={values.dataNascimento}
        onChange={handleChange}

         />
         {errors.dataNascimento && <span className={styles.error}>{errors.dataNascimento}</span>}

         <label>Email</label>
         <input type="email"
         value={values.email}
         onChange={handleChange} 
         placeholder='Email'
         />
         {errors.email && <span className={styles.error}>{errors.email}</span>}


        <label htmlFor="">Senha</label>
        <input 
        type="password" 
        id='password'
        value={values.password}
        onChange={handleChange}
        placeholder='Digite sua senha'
        />
        {errors.password && <span className={styles.error}>{errors.password}</span>}

      <label htmlFor="">Telefone</label>
      <input type="tel"
      id='telefone'
      name='telefone'
      onChange={handleChange}
      placeholder='81 99984-8954'
      value={values.telefone}

       />

       <label htmlFor="">Tipo de usuario</label> 
       <select
       name='tipoUsuario'
       value={values.tipoUsuario}
       onChange={handleChange}
       >
        <option value="administrador">Administrador</option>
        <option value="cliente">Cliente</option>
        <option value="fornecedor">Fornecedor</option>
        
        
        
        </select>     
      </div>


      
        <button type="submit" className={styles.submitButton}>
          <img src='/assets/icons/check-icon.svg' alt='Confirmar'></img>
        </button>
    </form>
  );
};  

export default CadastroForm;
