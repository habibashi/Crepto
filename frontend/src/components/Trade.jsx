import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

const Trade = () => {
    const [trade, setTrade] = useState({
        buy: true,
        sell: false,
    });
    const [amount, setAmount] = useState({
        buyAmount: "",
        sellAmount: "",
    });

    const dispatch = useDispatch();

    const onBuyBtnHandler = () => {
        setTrade((state) => {
            return { ...state, buy: true, sell: false };
        });
    };
    const onSellBtnHandler = () => {
        setTrade((state) => {
            return { ...state, buy: false, sell: true };
        });
    };
    const onChangeBuyHandler = (event) => {
        setAmount((prevState) => {
            return { ...prevState, buyAmount: event.target.value, sellAmount: "" };
        });
    };
    const onChangeSellHandler = (event) => {
        setAmount((prevState) => {
            return { ...prevState, buyAmount: "", sellAmount: event.target.value };
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form
            onSubmit={onSubmitHandler}
            className="w-[45%] bg-[#101010] rounded-lg mt-10">
            <div>
                <div className="font-bold text-white text-xl border-b border-gray-900 text-center p-2 pt-5">
                    Make a trade
                </div>
                <div>
                    <ul className="grid w-full gap-2 grid-cols-2 p-2">
                        <li>
                            <input
                                type="radio"
                                id="hosting-small"
                                name="hosting"
                                value={trade.buy}
                                className="hidden peer"
                                onChange={onBuyBtnHandler}
                                defaultChecked="true"
                            />
                            <label
                                htmlFor="hosting-small"
                                className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">Buy</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="hosting-big"
                                name="hosting"
                                value={trade.sell}
                                className="hidden peer"
                                onChange={onSellBtnHandler}
                            />
                            <label
                                htmlFor="hosting-big"
                                className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">Sell</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-between p-3 text-sm font-medium text-white">
                    <span>Total Balance</span>
                    <span>$50000</span>
                </div>
                <div className="flex items-center justify-between px-3 pb-3 text-sm font-medium text-white">
                    <span>Bitcoin Owned</span>
                    <span>200</span>
                </div>
                {trade.buy && (
                    <div className="px-3 pb-3">
                        <input
                            type="number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            placeholder="Amount to buy"
                            autoComplete="off"
                            name="buyAmount"
                            value={amount.buyAmount}
                            onChange={onChangeBuyHandler}
                            min="1"
                            required
                        />
                    </div>
                )}
                {trade.sell && (
                    <div className="px-3 pb-3">
                        <input
                            type="number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                            placeholder="Amount to sell"
                            autoComplete="off"
                            name="sellAmount"
                            value={amount.sellAmount}
                            onChange={onChangeSellHandler}
                            min="1"
                            // max={coinAmount}
                            required
                        />
                    </div>
                )}
            </div>
            <div className="p-3">
                <button
                    type="submit"
                    className="mt-4  w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                    {trade.buy ? "Buy" : "Sell"}
                </button>
            </div>
        </form>
    )
}

export default Trade