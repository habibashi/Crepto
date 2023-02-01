import Charts from "./Charts";
import Search from "./Search";
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