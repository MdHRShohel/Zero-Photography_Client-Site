import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const Main = () => {
  return (
    <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

