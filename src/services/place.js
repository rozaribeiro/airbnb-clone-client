import api from "./api";

const availablePLaceService = {
  getPlaceDisponibilty: async () => {
    return await api.get("/api/places/available");
  },
};

export default availablePLaceService;
