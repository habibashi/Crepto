import Main from "../components/Main";
import SideBar from "../components/SideBar";

const Home = () => {
    return (
        <div className="flex bg-bodyBg">
            <SideBar />
            <Main />
        </div>
    );
};

export default Home;
