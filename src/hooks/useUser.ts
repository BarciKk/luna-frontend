import { useNavigate } from "react-router-dom";
import { User } from "../modules/LoginComponent/login.component.types";
import Cookies from "universal-cookie";
import { cookieKeys } from "../enums/Auth/cookiesKeys.enums";

export const useUser = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const user: User | undefined = cookies.get(cookieKeys.user);

  const removeUser = () => {
    cookies.remove(cookieKeys.user);
    cookies.remove(cookieKeys.jwt);
    navigate("/");
  };

  const setUserCookie = (userData: User) => {
    cookies.set(cookieKeys.user, userData);
  };
  return { user, removeUser, setUserCookie };
};
