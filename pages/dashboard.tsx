import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
type Props = {}

const Dashboard = (props: Props) => {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      router.push("/")
    }
  }, [])
  return (
    <>
      <Navbar />

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