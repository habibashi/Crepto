import Charts from "./Charts";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="lg:ml-60">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
