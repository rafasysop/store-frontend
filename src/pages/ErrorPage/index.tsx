import { useEffect } from "react";
import { publicRoutes } from "../../routes/listRoutes";

export default function ErrorPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      publicRoutes.home.redirect();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
    </div>
  );
}
