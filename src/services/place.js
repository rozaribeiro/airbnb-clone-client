import api from "./api";

const availablePLaceService = {
  getPlaceDisponibilty: async () => {
    return await api.get("/api/places/available");
  },
  // NAWAL DEBUT
  // getCity: async () => {
  //   return await api.get("/api/cities");
  // },
  // getPlaceDisponibiltyByCity: async () => {
  //   return await api.get("/api/places/");
  // },
  // NAWAL FIN
};

export default availablePLaceService;
