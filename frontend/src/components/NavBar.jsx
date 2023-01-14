import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="bg-[#101010] p-5 flex max-lg:justify-between justify-end sticky top-0">
      <ul className="items-center gap-2 text-white hidden max-lg:flex">
        <li className="flex gap-2 items-center text-gray-400 font hover:text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <p className="text-sm">Home</p>
        </li>
        <li className="flex gap-2 items-center text-gray-400 font hover:text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <p className="text-sm">Search</p>
        </li>
      </ul>
      <div className="flex gap-4">
        <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-mediu rounded-full text-gray-400 font hover:text-white md:mr-0 focus:ring-gray-700" type="button">
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 mr-2 rounded-full" src="https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          Habib ashi
          <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>

        <div id="dropdownAvatarName" className="z-10 hidden rounded shadow w-44 bg-gray-700 divide-gray-600">
          <ul className="py-1 text-sm gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
            <li>
              <div className="block px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white text-gray-200">Dashboard</div>
            </li>
          </ul>
          <div className="py-1">
            <div onClick={onLogoutHandler} className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-600 text-gray-200 hover:text-white">Logout</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
