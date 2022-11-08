import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export const Main = () => {
  return (
    <div className="container">
        <Nav></Nav>
        <Outlet></Outlet>
    </div>
  );
};

