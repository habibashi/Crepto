import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { searchCoin } from "../features/API/fetchAPI";
import { useNavigate } from "react-router-dom";


const Search = () => {
    const [searchCoins, setSearchCoins] = useState("");
    const [dataCoins, setDataCoins] = useState([]);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(8);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchCoinsData = async () => {
            try {
                const data = await searchCoin(searchCoins);
                setDataCoins(data);
            } catch (error) {
                setError("API error");
            }
            setIsLoading(false);
        }
        searchCoinsData();
    }, [searchCoins]);

    const searchChangeHandler = (event) => {
        setSearchCoins(event.target.value)
    };

    if (isLoading) {
        return (
            <div className="mt-64">
                <Spinner />
            </div>
        )
    }

    if (error) {
        return <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">{error}</p>
            <p>Something not ideal might be happening.</p>
        </div>
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = dataCoins.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className="p-5">
            <div className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="">
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        value={searchCoins}
                        onChange={searchChangeHandler}
                    />
                </div>
            </div>

            {searchCoins.length > 0 && <div className="mt-5 overflow-x-auto shadow-md  bg-SideBarColor text-white text-center text-5xl rounded-lg">
                <table className="w-full text-sm text-left light:text-gray-500 text-gray-400">
                    <thead className="text-xs light:text-gray-700 uppercase light:bg-gray-50 bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="pl-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                market_cap_rank
                            </th>
                            <th scope="col" className="px-6 py-3">
                                symbol
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((coin) => (
                            <tr key={coin.id} onClick={() => navigate(`/chart/${coin.id}`)} className="light:bg-white light:border-b bg-SideBarColor border-gray-700 cursor-pointer">
                                <th
                                    scope="row"
                                    className="pl-6 pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white"
                                >
                                    <div className="flex items-center">
                                        <img className="w-6 h-6" src={coin.large} alt={coin.large} />
                                        <p className="ml-2">{coin.name}</p>
                                    </div>
                                </th>
                                <th className="px-6 py-4">{coin.market_cap_rank !== null
                                    ? coin.market_cap_rank
                                    : "10,000+"}
                                </th>
                                <th className="px-6 py-4">{coin.symbol}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default Search