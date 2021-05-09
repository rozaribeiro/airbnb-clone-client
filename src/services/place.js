// import api from "./api";

// const placeService = {

//   get: async (email, password) => {
//     const user = { email, password };

//     return await api.post("/api/signin", user);
//   },

//   // other service method
// };

// export default userService;
import api from "./api";

const availablePLaceService = {
  getPlaceDisponibilty: async () => {
    return await api.get("/api/places/available");
  },
  deletedPLaceService: async () => {
    return await api.delete("/api/user/:user_id/places/:placeId");
  },
};
export default availablePLaceService;
