import { useSelector } from "react-redux";

export const TradeTable = () => {
  const { trade, isLoading } = useSelector((state) => state.trade);
  return (
    <div className="overflow-y-auto max-h-80 shadow-md mt-10 w-[50%] bg-[#101010] text-white text-center text-5xl rounded-lg">
      {!isLoading && (
        <table className="w-full text-sm text-left light:text-gray-500 text-gray-400">
          <thead className="text-xs light:text-gray-700 uppercase light:bg-gray-50 bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {trade.map((coin) => (
              <tr
                key={coin.name}
                className="light:bg-white light:border-b bg-SideBarColor border-gray-700 cursor-pointer"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white"
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
                <th className="px-6 py-4">{coin.amount}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isLoading && (
        <div
          role="status"
          className="max-w-md w-[700px] p-4 space-y-4  divide-y rounded-lg max-h-[80] shadow animate-pulse divide-gray-700 md:p-6 border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default TradeTable;
