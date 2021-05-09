import api from './api';

const bookingsService = {
    getBookedPlaces: async () => {
        return await api.get('/api/bookings');
    },
    // deleteBookedPlace: async (id) => {
    //     return await api.get('/api/bookings/' + id);
    // }
    // other service method
}

export default bookingsService;