import React from 'react'

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">

      <div className="flex flex-row border-b items-center justify-between pb-2">
        <span className="text-lg font-semibold capitalize dark:text-gray-300">
          Codefeast
        </span>
      </div>

      <ul className="mt-2 text-gray-600">
        <li className="mt-8">
          <Link to="/" className="flex ">
            <svg
              className="fill-current h-5 w-5 dark:text-gray-300"
              viewBox="0 0 24 24">
              <path
                d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                    4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                    4h4v-4h-4M4 8h4V4H4v4z"></path>
            </svg>
            <span
              className="ml-2 capitalize font-medium text-black
                dark:text-gray-300">
              Todos
            </span>
          </Link>
        </li>

        <li className="mt-8">
          <Link to="/products" className="flex">
            <svg
              className="fill-current h-5 w-5 dark:text-gray-300"
              viewBox="0 0 24 24">
              <path
                d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                    4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                    9v2h-4v-2h4m2-2h-8v6h8v-6z"></path>
            </svg>
            <span
              className="ml-2 capitalize font-medium text-black
                dark:text-gray-300">
              Products
            </span>
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Header