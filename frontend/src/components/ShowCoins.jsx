import ShowTable from "./ShowTable";

const ShowCoins = () => {
    return (
        <div className="flex flex-col gap-10 h-max px-6 pt-4">
            <div className="text-white text-center text-5xl rounded-md">
                <img className="h-40 w-full rounded-lg" src="https://image.coinpedia.org/wp-content/uploads/2022/12/14185803/bitcoin-bounce-1200x628.png" alt="" />
            </div>
            <ShowTable />
        </div>
    )
}

export default ShowCoins;