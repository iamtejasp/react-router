import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import NoPage from "./pages/NoPage";
import NavBar from "./pages/NavBar";

const CustomRouter = () => {
  // const url = window.location.href; --> Return Full URL
  // const pathName = window.location.pathname --> Return URL Path name

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;

    case "/about":
      component = <About />;
      break;

    case "/store":
      component = <Store />;
      break;

    default:
      component = <NoPage />;
      break;
  }

  return (
    <>
      <NavBar />
      {component}
    </>
  );
};

export default CustomRouter;
