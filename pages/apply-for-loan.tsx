import Navbar from "@/components/Navbar";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Link from "next/link";
import Spinner from "@/components/Spinner";

type Props = {};

const ApplyForLoan = (props: Props) => {
  // We can use the react query for caching and to increase the code readability
  const [loanAmount, setLoanAmount] = useState<number>()
  const [loanStatus, setLoanStatus] = useState<boolean>(false);
  const [appliedStatus, setAppliedStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [preAssessment, setPreAssessment] = useState<number>()
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      router.push("/")
    }
  }, [])

  const requestForLoan = async (loanAmount: number) => {
    setIsLoading(true)
    setAppliedStatus(true)
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/submit-loan-application`
      const body = {
        loanAmount
      }
      const result = await axios.post(url, body);
      setLoanStatus(result.data.approvalStatus.loanStatus)
      console.log("🚀 ~ requestForLoan ~ result.data:", result.data)
      setPreAssessment(result.data.preAssessment)
    } catch (e) {
      console.log("🚀 ~ requestForLoan ~ e:", e)
      setIsError(true)
    }
    setIsLoading(false)
  }
  const handleApplicationSubmit = () => {
    if (loanAmount) {
      requestForLoan(loanAmount)
    } else {
      alert("Please Enter a valid amount")
    }
  }
  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-gray-900 body-font h-[91vh]">
        <div className="container px-5 py-24 mx-auto">
          <div className="p-4 md:w-1/2 w-full mx-auto h-96 md:h-[30rem]">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              {
                !appliedStatus &&
                <>
                  <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                    <span>Apply for Loan </span>
                  </h1>
                  <div className="relative mb-4">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Loan Amount</label>
                    <input type="number" required value={loanAmount} name="loanAmount" onChange={(e) => {
                      const newLoanAmount = parseFloat(e.target.value);
                      if (!isNaN(newLoanAmount)) {
                        setLoanAmount(newLoanAmount);
                      }
                    }}
                      className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <button onClick={handleApplicationSubmit} className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-4 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Submit Loan Request
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </>
              }
              {
                isLoading &&
                <Spinner />
              }
              {
                (appliedStatus && !isLoading && !isError) &&
                <div className="w-64 p-4 m-auto shadow-lg rounded-2xl">
                  <div className="w-full h-full text-center">
                    <div className="flex flex-col justify-between h-full">

                      {
                        (loanStatus) ?
                          <>
                            <svg className="w-12 h-12 m-auto mt-4 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                              </path>
                            </svg>

                            <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                              Congratulations your loan has been approved.
                            </p>
                            <p className="dark:text-white text-bolder" >
                              Pre-assessment : {preAssessment}
                            </p>
                          </>
                          :
                          <>
                            <svg className="w-12 h-12 m-auto mt-4 text-red-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>

                            <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                              Sorry your loan has been rejected.
                            </p>
                            <p className="dark:text-white text-bolder" >
                              Pre-assessment : {preAssessment}
                            </p>
                          </>

                      }
                      <div className="flex items-center justify-between w-full gap-4 mt-8">
                        <Link href="/dashboard" type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                          Close
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              }
              {
                (appliedStatus && !isLoading && isError) &&
                <>
                  Error Occurred Please Try Again
                </>
              }
            </div>
          </div>
        </div>
      </section>
    </>);
};

export default ApplyForLoan;
