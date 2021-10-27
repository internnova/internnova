import jwt from "jsonwebtoken";
import { deleteCookie, getCookie } from "../../utils/cookies";

const getUser = async () => {
  const userToken = getCookie("userToken");
  if (userToken && jwt.verify(userToken, process.env.JWT_SECRET as string)) {
    deleteCookie("userToken");
    return "success";
  }
  return null;
};

export default getUser;
