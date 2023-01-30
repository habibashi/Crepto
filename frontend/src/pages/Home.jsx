import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import "react-toastify/dist/ReactToastify.css"

const Home = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div className="bg-bodyBg">
            <SideBar />
            <Main />
        </div>
    );
};

export default Home;
