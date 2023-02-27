import api from './api';

export async function postNewAudio(body, token) {
  const response = await api.post('/tts', body, { 
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data; 
}
