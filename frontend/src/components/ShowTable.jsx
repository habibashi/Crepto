import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { getCoins } from "../features/API/fetchAPI";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const ShowTable = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getCoinsData = async () => {
      try {
        const data = await getCoins();
        setCoins(data);
      } catch (error) {
        setError("API error");
      }
      setIsLoading(false);
    };
    getCoinsData();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-36">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div
        class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p class="font-bold">{error}</p>
        <p>Something not ideal might be happening.</p>
      </div>
    );
  }

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="overflow-x-auto shadow-md  bg-SideBarColor text-white text-center text-5xl rounded-lg">
        <table className="w-full text-sm text-left light:text-gray-500 text-gray-400">
          <thead className="text-xs light:text-gray-700 uppercase light:bg-gray-50 bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="pl-6 py-3">
                #
              </th>
              <th scope="col" className="py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                high_24h
              </th>
              <th scope="col" className="px-6 py-3">
                low_24h
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3">
                Circulation Supply
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((coin) => (
              <tr
                key={coin.id}
                onClick={() => navigate(`/chart/${coin.id}`)}
                className="light:bg-white light:border-b bg-SideBarColor border-gray-700 cursor-pointer"
              >
                <th
                  scope="row"
                  className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white"
                >
                  {coin.rank}
                </th>
                <th
                  scope="row"
                  className="pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white"
                >
                  <div className="flex items-center">
                    <img
                      className="w-6 h-6"
                      src={coin.image}
                      alt={coin.image}
                    />
                    <p className="ml-2">{coin.name}</p>
                  </div>
                </th>
                <th className="px-6 py-4">${coin.price}</th>
                <th className="px-6 py-4">
                  <div className="flex items-center text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                    <p className="ml-2">${coin.high_24h}</p>
                  </div>
                </th>
                <th className="px-6 py-4">
                  <div className="flex items-center text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>

                    <p className="ml-2">${coin.low_24h}</p>
                  </div>
                </th>
                <th className="px-6 py-4">${coin.market_cap}</th>
                <th className="px-6 py-4 uppercase">
                  ${coin.circulating_supply} {coin.symbol}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={coins.length}
        paginate={paginate}
      />
    </>
  );
};

export default ShowTable;
