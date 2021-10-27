import { User } from "../../utils/types";
import axios from "axios";
import jwt from "jsonwebtoken";
import { deleteCookie, getCookie } from "../../utils/cookies";

interface Response {
  data?: {
    createdUser?: string;
  };
  status: number;
  message: string;
}

const register = async (user: User) => {
  const userToken = getCookie("userToken");
  if (userToken) {
    if (jwt.verify(userToken, process.env.JWT_SECRET as string)) {
      return "already-logged-in";
    } else {
      deleteCookie("userToken");
    }
  }
  try {
    const res: Response = await axios.post(
      `${process.env.API_URL}/auth/register`,
      { user }
    );
    if (res.status === 200) {
      if (res.data && res.data.createdUser) {
        return "logged-in";
      } else {
        return "internal-server-error";
      }
    } else if (res.status === 400 && res.message.startsWith("User")) {
      return "failed-creating-user";
    } else {
      return "internal-server-error";
    }
  } catch (err) {
    return err;
  } finally {
    return "failed-register";
  }
};

export default register;
