import api from './api';

const bookingsService = {
    getBookedPlaces: async () => {
        return await api.get('/api/bookings');
    },
    bookPlaces: async () => {
        return await api.post('/api/bookings');
    },
    // deleteBookedPlaces: async (id) => {
    //     return await api.get('/api/bookings/' + id);
    // } 
}

export default bookingsService;