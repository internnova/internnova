import axios from "axios";

interface Credentials {
  email: string;
  password: string;
}

interface Response {
  data: {
    token: string;
  };
  status: number;
  message: string;
}

const login = async (credentials: Credentials) => {
  if (localStorage.getItem("userToken")) {
    return "logged-in";
  } else {
    try {
      const res: Response = await axios.post(
        `${process.env.API_URL}/auth/login`,
        credentials
      );
      if (res.status === 200) {
        if (res.data && res.data.token) {
          localStorage.setItem("userToken", res.data.token);
          return "logged-in";
        } else {
          return "internal-server-error";
        }
      } else if (res.status === 404) {
        return "incorrect-username-or-password";
      } else if (
        res.status === 400 &&
        res.message === "Token can't be created"
      ) {
        return "data-serializing-error";
      } else {
        return "internal-server-error";
      }
    } catch (err) {
      return err;
    } finally {
      return "failed-login";
    }
  }
};

export default login;
