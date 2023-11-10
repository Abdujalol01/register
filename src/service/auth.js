import axios from "./api";

const AuthService = {
  async userRegister(user) {
    const { data } = await axios.post("/users", { user });
    return data;
  },
  async userLogin(user) {
    const response = await axios.post("/users/login", { user });
    return response;
  },
  async getUsers() {
    const response = await axios.get("/user");
    return response;
  },
};
export default AuthService;
