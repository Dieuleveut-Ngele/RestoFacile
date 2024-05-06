import axios from 'axios';

const API_URL = 'https://capstone2-c2-dieuleveut-ngele.onrender.com/user/login';

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data.token;
    } catch (error) {
      throw new Error('Erreur lors de la connexion');
    }
  },
  // Autres fonctions comme register, logout, etc.
};

export default authService;
