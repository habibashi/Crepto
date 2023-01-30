import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const LogIn = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(login(formData));
  };

  return (
    <div className="bg-logInBG flex justify-center h-screen">
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="rounded-[10px] shadow-2xl w-[450px] h-max mt-20 bg-inside p-7">
          <h3 className="text-white text-center font-bold text-3xl">Login</h3>
          <form onSubmit={onSubmitHandler}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="w-max block mb-2 text-sm font-medium text-white"
              >
                Username
              </label>
              <input
                type="text"
                autoComplete="off"
                id="username"
                name="username"
                className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="username"
                onChange={onChangeHandler}
                value={username}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="w-max block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="password"
                onChange={onChangeHandler}
                value={password}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <h2 className="text-blue-800 text-center cursor-pointer">
              <Link to="/register">Switch to Register</Link>
            </h2>
          </form>
        </div>
      )}
    </div>
  );
};

export default LogIn;
