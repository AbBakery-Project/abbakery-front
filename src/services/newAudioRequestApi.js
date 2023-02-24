import api from './api';

export async function postNewAudio(audioName, text, token) {
  const response = await api.post('/tts', { 
    audioName, 
    text,
    headers: {
      Authorization: `Bearer ${token}`,
    },
   });
  return response.data; //retorna o q? Tem q retornar algo pra finalizar a conversão!
}
