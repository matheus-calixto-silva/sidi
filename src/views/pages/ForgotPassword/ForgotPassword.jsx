import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Limpa qualquer mensagem de erro antes de tentar

    // Simula o envio de recuperação de senha
    if (username === '') {
      setError('Por favor, insira o e-mail ou CPF');
      return;
    }

    // Aqui, você pode adicionar lógica real de recuperação de senha, como uma requisição para o backend.
    setSuccessMessage('Instruções de recuperação de senha foram enviadas para seu e-mail.');
    
    // Simulação de redirecionamento após sucesso
    setTimeout(() => {
      navigate('/login'); // Redireciona para a página de login após o sucesso
    }, 3000);
  };

  return (
    <section className={styles.forgotPasswordContainer}>
      <h2>Recuperação de Senha</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">E-mail ou CPF</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        <button type="submit" className={styles.submitButton}>Enviar Instruções</button>
      </form>
      <p className={styles.backToLogin} onClick={() => navigate('/login')}>
        Voltar para o login
      </p>
    </section>
  );
};

export default ForgotPassword;
