import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import axios from 'axios'

type Props = {};

const ApplyForLoan = (props: Props) => {
  const [loanAmount, setLoanAmount] = useState(0)
  const [loanStatus, setLoanStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const requestForLoan = async (loanAmount: number) => {
    setIsLoading(true)
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/submit-loan-application`
      const body = {
        loanAmount
      }
      const result = await axios.post(url, body);
      console.log("🚀 ~ requestForLoan ~ result:", result)
    } catch (e) {
      console.log("🚀 ~ requestForLoan ~ e:", e)

    }
    setIsLoading(false)
  }
  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-gray-900 body-font h-[91vh]">
        <div className="container px-5 py-24 mx-auto">
          <div className="p-4 md:w-1/2 w-full mx-auto h-96 md:h-[30rem]">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                <span>Apply for Loan </span>
              </h1>
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Loan Amount</label>
                <input type="number" id="full-name" value={loanAmount} name="loanAmount" onChange={(e) => {
                  const newLoanAmount = parseFloat(e.target.value);
                  if (!isNaN(newLoanAmount)) {
                    setLoanAmount(newLoanAmount);
                  }
                }}
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button onClick={() => { console.log("Hello "); requestForLoan(loanAmount) }} className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-4 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Submit Loan Request
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>);
};

export default ApplyForLoan;
