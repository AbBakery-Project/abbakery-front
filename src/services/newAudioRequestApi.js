import api from './api';

export async function postNewAudio(audioName, text) {
  const response = await api.post('/tts', { audioName, text });
  return response.data; //retorna o q?
}
