// authService.js

import axios from 'axios';

import { apiUrl } from '../../env';



export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/auth/users/me/`);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error fetching user data:', error);
    return null;
  }
};
