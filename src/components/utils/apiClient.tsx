import axios from 'axios';

// Configurer le client axios avec l'URL de base de votre API
const apiClient = axios.create({
  baseURL: 'https://api.nilcloud.net',
  withCredentials: true,
});

// Ajouter un intercepteur pour inclure les tokens dans chaque requête
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const csrfToken = localStorage.getItem('csrfToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (csrfToken) {
    config.headers['x-xsrf-token'] = csrfToken;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Ajouter un intercepteur pour gérer les réponses d'erreur
apiClient.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;

  // Vérifiez si l'erreur est due à un token expiré et que nous n'avons pas encore essayé de rafraîchir le token
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    try {
      console.log('update later')
      // // Tente de rafraîchir le token
      // const refreshToken = document.cookie.split('; ').find(row => row.startsWith('refreshToken=')).split('=')[1];
      // const response = await axios.post('https://api.nilcloud.net/auth/refresh-token', { token: refreshToken });

      // if (response.status === 200) {
      //   const { token, csrfToken } = response.data;
        
      //   // Stocker les nouveaux tokens
      //   localStorage.setItem('token', token);
      //   localStorage.setItem('csrfToken', csrfToken);
        
      //   // Mettre à jour les en-têtes de la requête originale avec les nouveaux tokens
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   originalRequest.headers['x-xsrf-token'] = csrfToken;
        
      //   // Rejouer la requête originale
      //   return apiClient(originalRequest);
      //}
    } catch (err) {
      console.error('Failed to refresh token', err);
    }
  }

  return Promise.reject(error);
});

export default apiClient;
