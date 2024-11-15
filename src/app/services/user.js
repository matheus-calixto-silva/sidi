// userService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/usuarios';

export const loginRequest = async (username, password) => {
  try {
    const response = await axios.get(API_URL);
    const users = response.data;

    // Verificar se existe um usuário com o email ou CPF e a senha fornecida
    const user = users.find(
      (user) =>
        (user.email === username || user.cpf === username) &&
        user.senha === password
    );

    if (user) {
      console.log(user);
      return user;
    }
    return null; // Retorna null se as credenciais estiverem incorretas
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return null;
  }
};

// Função para registrar um novo usuário
export async function registerUser(newUser) {
  try {
    const response = await axios.post(API_URL, newUser);
    return response.data; // Retorna os dados do novo usuário
  } catch (error) {
    if (error.response && error.response.status === 409) {
      // Usuário já existe
      console.error('Usuário já registrado');
    } else {
      console.error('Erro ao registrar usuário:', error);
    }
    return null; // Retorna null em caso de erro
  }
}

// Função para obter usuário do LocalStorage
export function getUserLocalStorage() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

// Função para salvar usuário no LocalStorage
export function setUserLocalStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// Função para remover usuário do LocalStorage
export function removeUserLocalStorage() {
  localStorage.removeItem('user');
}
