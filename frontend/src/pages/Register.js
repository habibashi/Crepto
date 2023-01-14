import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { username, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
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

    dispatch(register(formData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-logInBG flex justify-center h-screen">
      <div className="rounded-[10px] shadow-2xl w-[450px] h-max mt-20 bg-inside p-7">
        <h3 className="text-white text-center font-bold text-3xl">Register</h3>
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
              value={username}
              onChange={onChangeHandler}
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
              value={password}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium w-max text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirmPassword"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={onChangeHandler}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
          <h2 className="text-blue-800 text-center cursor-pointer">
            <Link to="/login">Switch to login</Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Register;
