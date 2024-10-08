import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import NavBar from "./pages/NavBar";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import TeamNavBar from "./pages/TeamNavBar";

const nestedRouter = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "*", element: <Navigate to={"/"} /> },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/team",
        element: <TeamNavLayout />,
        children: [
          {
            index: true,
            element: <Team />,
          },
          {
            path: ":id",
            element: <TeamMember />,
          },
          // {
          //   path: "tejas",
          //   element: <TeamMember name={"Tejas"} />,
          // },
          // {
          //   path: "kayle",
          //   element: <TeamMember name={"kayle"} />,
          // },
        ],
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <NavBar />
      {/* {Render Componets} */}
      <Outlet />
    </>
  );
}

function TeamNavLayout() {
  return (
    <>
      <TeamNavBar />
      <Outlet context={"Hello From Team"} />
    </>
  );
}

export default nestedRouter;
