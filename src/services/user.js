  
import api from './api';

const userService = {
    // login: async (email, password) => {
    //  const user = {email, password};

    //     return await api.post('/api/signin', user);
    // },
    signup: async (email, password) => {
        const user = {email, password};
   
           return await api.post('/api/signin', user);
    },
    // other service method
}

export default userService;