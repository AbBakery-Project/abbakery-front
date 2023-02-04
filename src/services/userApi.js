import api from './api';

export async function signUp(name, email, password) {
  const response = await api.post('/users', { name, email, password });
  return response.data; //retorna id, name e email
}

export async function signIn(email, password) {
  const response = await api.post('/auth', { email, password });
  return response.data; //retorno o token
}
