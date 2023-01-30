import Charts from "../pages/Charts";
import Search from "../pages/Search";
import NavBar from "./NavBar";
import ShowCoins from "./ShowCoins";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="lg:ml-60">
            <NavBar />
            <Outlet />
        </div>
    )
};

export default Main;