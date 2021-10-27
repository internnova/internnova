import jwt from "jsonwebtoken";
import { getCookie } from "../../utils/cookies";

const getUser = async () => {
  const userToken = getCookie("userToken");
  if (userToken && jwt.verify(userToken, process.env.JWT_SECRET as string)) {
    return jwt.decode(userToken);
  }
};

export default getUser;
