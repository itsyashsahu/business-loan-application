import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const Dashboard = (props: Props) => {
  const router = useRouter()

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-indigo-500  h-[9vh]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Loan Application</span>
          </a>
          <div className="flex items-center md:order-2">
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">

          </div>
        </div>
      </nav >

      <section className="text-gray-600 body-font flex min-h-[91vh] justify-center items-center overflow-hidden  bg-gray-900 flex-col md:flex-row">
        <div className="p-4 xl:w-1/2 md:w-1/2 w-full h-96 md:h-[30rem]">
          <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
            <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">Review Your Balance Sheet</h1>
            <span>Balance sheet helps in -  </span>
            <span>Blahh !! </span>
            <span>Blahh !! </span>
            <span>Blahh !! </span>
            <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-4 px-4 w-full focus:outline-none hover:bg-gray-700 rounded" onClick={() => { router.push("/balance-sheet") }} >Review
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4 xl:w-1/2 md:w-1/2 w-full h-96 md:h-[30rem]">
          <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
            <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
              <span>Apply for Loan </span>
            </h1>
            <span>Terms and Conditions </span>
            <span>Blahh !! </span>
            <span>Blahh !! </span>
            <span>Blahh !! </span>
            <button onClick={() => { router.push("/apply-for-loan") }} className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-4 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Apply for Loan
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Dashboard