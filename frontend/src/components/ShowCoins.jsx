import ShowTable from "./ShowTable";

const ShowCoins = () => {
  return (
    <div className="flex flex-col gap-10 h-max px-6 pt-4">
      <div className="text-white text-center text-5xl rounded-md">
        <img
          className="h-40 w-full rounded-lg object-cover"
          src="https://images.pexels.com/photos/14891553/pexels-photo-14891553.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <ShowTable />
    </div>
  );
};

export default ShowCoins;
