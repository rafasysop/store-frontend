import jwtDecode from "jwt-decode";
import Dashboard from "../../components/DashBoardAdmin";
import { LoginAdmin } from "../../components/LoginAdmin";

export const AdminPage = () => {
  const VerifyAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (!!token) {
      const user = jwtDecode<any>(token);
      if (user.profile === "admin") {
        return true;
      } else {
        localStorage.removeItem("token");
      }
    }
    return false;
  };

  if (VerifyAuthenticated()) {
    return <Dashboard />;
  }
  return <LoginAdmin />;
};
