import api from "./api";

const bookingsService = {
<<<<<<< HEAD
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
=======
  getBookedPlaces: async () => {
    return await api.get("/api/bookings");
  },
  // deleteBookedPlace: async (id) => {
  //     return await api.get('/api/bookings/' + id);
  // }
  // other service method
};

export default bookingsService;

// import api from "./api";

// const bookingsService = {
//   // if host, call getPlacesBookingsOfHost ELSE call getBookingsMadeByGuest
//   // getListOfBookingsForAuthUserHost //
//   getPlacesBookingsOfHost: async () => {
//     // const token = localStorage.getItem("token");
//     // console.log(token);
//     const tempRole = "host";
//     const requestBody = { tempRole };
//     // let authUser = 1;
//     // return await api.get("/api/bookings", requestBody);
//     return await api.get("/api/bookings", requestBody);
//   },
//   getBookingsMadeByGuest: async () => {
//     // const token = localStorage.getItem("token");
//     // console.log(token);

//     // const tempRole = "guest";
//     // const requestBody = { token };
//     // let authUser = 1;

//     return await api.get("/api/bookings");
//   },

//   // other service method
// };

// export default bookingsService;
>>>>>>> b8794778e154d243965a76ba97da00efaac0ad94
