import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-SideBarColor h-screen fixed w-60 p-6 max-lg:hidden">
      <div className="flex gap-2 items-center text-white">
        <img
          className="w-16 h-16"
          src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitoin_btc_coin_crypto-256.png"
          alt=""
        />
        <h2 className="text-2xl font-bold">Crypto</h2>
      </div>
      <ul className="mt-8">
        <NavLink
          to={"/home"}
          className="flex gap-2 items-center text-gray-400 font hover:text-white cursor-pointer"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <div className="text-lg">Home</div>
        </NavLink>
        <NavLink
          to={"/search"}
          className="flex gap-2 mt-5 items-center text-gray-400 font hover:text-white cursor-pointer"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <div className="text-lg">Search</div>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
