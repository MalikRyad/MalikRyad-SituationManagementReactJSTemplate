import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:59980/api/";

class Middleware {
  login( username, password) {
    //  console.log(password);
    return axios
      .get("https://localhost:44359/api/users/"+username).then((resp)=>{
        console.log(resp.data.Sexe);

        return resp.data;

      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
 

  getUserBoard() {
    return axios.get(API_URL + "name", { headers: authHeader() });
  }

 

}

export default new Middleware();
