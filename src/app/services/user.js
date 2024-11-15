import axios from 'axios';

const API_URL = 'http://localhost:3000/usuarios';

export const loginRequest = async (username, password) => {
  try {
    const response = await axios.get(API_URL);
    const users = response.data;

    const user = users.find(
      (user) =>
        (user.email === username || user.cpf === username) &&
        user.senha === password
    );

    if (user) {
      console.log(user);
      return user;
    }
    return null;
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return null;
  }
};

export async function registerUser(newUser) {
  try {
    const response = await axios.post(API_URL, newUser);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      console.error('Usuário já registrado');
    } else {
      console.error('Erro ao registrar usuário:', error);
    }
    return null;
  }
}

export function getUserLocalStorage() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export function setUserLocalStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeUserLocalStorage() {
  localStorage.removeItem('user');
}
