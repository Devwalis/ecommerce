import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import validationSchema from './validationSchema';
import styles from './CadastroForm.module.css';

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
        value={value.nome}
        onChange={errors.nome ? styles.errorInput :''}
        ></input>
        {errors.nome && <span className={styles.error}>{errors.nome}</span>}
      </div>
      
        
    </form>
  )