import Link from 'next/link'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
  const [email, setEmail] = useState('')

  const handleLogout = () => {
    localStorage.removeItem('email')
    setEmail('')
    Router.push('/')
  }

  useEffect(() => {
    if (localStorage.getItem('email')) {
      setEmail(localStorage.getItem('email') || '')
    }
  }, [])

  return (
    <nav className="bg-white border-gray-200 dark:bg-indigo-500 h-[9vh]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Loan Application</span>
        </Link>
        <div className="flex items-center md:order-2">
          <div className='hidden sm:block text-white text-md mr-4 h-full gird place-items-center' >
            {email}
          </div>
          <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvM35_8HWhKimCI4ohkcmrLTIncwleXgjfo2ABeHgYhNwrjgt-gk1qQP5Cds_vDKPOQtE&usqp=CAU" alt="user photo" />
          </button>
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          {
            email &&
            <button onClick={handleLogout} className="flex items-center mt-auto ml-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded">Logout
            </button>
          }
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        </div>
      </div>
    </nav >
  )
}

export default Navbar