import api from "./api";

const citiesService = {
  getCities: async () => {
    return await api.get("/api/cities");
  },
};
export default citiesService;
