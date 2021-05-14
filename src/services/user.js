import api from "./api";

const userService = {
  signup: async (first_name, last_name, role, email, password) => {
    const user = { first_name, last_name, role, email, password };

    return await api.post("/api/signup", user);
  },

  signin: async (email, password) => {
    const user = { email, password };

    return await api.post("/api/signin", user);
  },

  // other service method
};

export default userService;
