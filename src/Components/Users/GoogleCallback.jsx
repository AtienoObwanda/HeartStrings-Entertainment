import React, { useEffect } from 'react';
import axios from 'axios';

import { apiUrl } from '../../../env'


const GoogleCallback  = () => {
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
  
      if (code) {
        // Exchange the authorization 
        axios.post(`${apiUrl}/auth/google/callback/`, { code })
          .then(response => {
            const accessToken = response.data.access_token;
            // Store the access token and perform further actions
          })
          .catch(error => {
            console.error('Error exchanging authorization code:', error);
          });
      }
    }, []);


  return (

    <div>Processing...</div>


    )
}

export default GoogleCallback