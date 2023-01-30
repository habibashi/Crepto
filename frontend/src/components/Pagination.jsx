import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <nav aria-label="Page navigation example" className='flex justify-center items-center mb-11 cursor-pointer'>
            <ul className="inline-flex items-center -space-x-px">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <div onClick={() => paginate(number)} className="px-3 py-2 leading-tight bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">{number}</div>
                    </li>
                ))}
            </ul>
        </nav>

    )
}
