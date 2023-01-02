import jwtDecode from "jwt-decode";

export const AdminPage = () => {
  const VerifyAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (!!token) {
      const user = jwtDecode<any>(token);
      if (user.profile === "admin") {
        return true;
      }
    }
    return false;
  };

  if (VerifyAuthenticated()) {
    return <div>Admin Page</div>;
  }
  return <div>Login</div>;
};
