const ShowTable = () => {
    return (
        <div className="overflow-x-auto shadow-md  bg-SideBarColor text-white text-center text-5xl rounded-lg">
            <table className="w-full text-sm text-left light:text-gray-500 text-gray-400">
                <thead className="text-xs light:text-gray-700 uppercase light:bg-gray-50 bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" className="pl-6 py-3">
                            #
                        </th>
                        <th scope="col" className="py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="light:bg-white light:border-b bg-SideBarColor border-gray-700">
                        <th scope="row" className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            1
                        </th>
                        <th scope="row" className="pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Sliver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="light:bg-white light:border-b bg-SideBarColor border-gray-700">
                        <th scope="row" className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            2
                        </th>
                        <th scope="row" className="pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr className="light:bg-white bg-SideBarColor border-gray-700">
                        <th scope="row" className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            3
                        </th>
                        <th scope="row" className="pr-6 py-4 font-medium text-white-900 whitespace-nowrap light:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                    </tr>
                    <tr className="light:bg-white light:border-b bg-SideBarColor border-gray-700">
                        <th scope="row" className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            1
                        </th>
                        <th scope="row" className="pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Sliver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="light:bg-white light:border-b bg-SideBarColor border-gray-700">
                        <th scope="row" className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            1
                        </th>
                        <th scope="row" className="pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Sliver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="light:bg-white light:border-b bg-SideBarColor border-gray-700">
                        <th scope="row" className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            1
                        </th>
                        <th scope="row" className="pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Sliver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="light:bg-white light:border-b bg-SideBarColor border-gray-700">
                        <th scope="row" className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            1
                        </th>
                        <th scope="row" className="pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Sliver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="light:bg-white light:border-b bg-SideBarColor border-gray-700">
                        <th scope="row" className="pl-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            1
                        </th>
                        <th scope="row" className="pr-6 py-4 font-medium light:text-gray-900 whitespace-nowrap text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Sliver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowTable