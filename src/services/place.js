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
