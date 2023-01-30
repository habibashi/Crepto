import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import Charts from "./pages/Charts";
import Search from "./pages/Search";
import ShowCoins from "./components/ShowCoins";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<ShowCoins />} />
          <Route path="/chart/:id" element={<Charts />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
