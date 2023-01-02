import ErrorPage from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";

interface IRoute {
  title: string;
  path: string;
  element: any;
  isPrivte: boolean;
  redirect: () => void;
}

interface IPublicRoutes {
  home: IRoute;
}

export const publicRoutes: IPublicRoutes = {
  home: {
    title: "Home",
    path: "/",
    element: HomePage,
    isPrivte: false,
    redirect() {
      console.log("Redirect");
      window.location.href = this.path;
    },
  },
};

export const privateRoutes = {};

export const adminRoutes = {};

export const errorPageRoute = {
  path: "*",
  element: ErrorPage,
};

export const listRoutes = { ...publicRoutes, ...privateRoutes };
