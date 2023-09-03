import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
type Props = {}

const BalanceSheet = (props: Props) => {
  const router = useRouter()
  const [Data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const loadingSkeletonArray = ["   ", "  ", "    ", "    "];
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/balance-sheet?userId=123`
      const result = await axios.get(url);
      console.log("🚀 ~ useEffect ~ result:", result)
      setData(result.data.balanceSheet);

    } catch (e) {
      console.log("🚀 ~ useEffect ~ e:", e)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Navbar />

      <section className="text-gray-400 bg-gray-900 body-font h-[91vh]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Balance Sheet</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Year</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Month</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Assets Value</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Profit/Loss</th>
                  <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {
                  isLoading &&
                  loadingSkeletonArray?.map((str, index) => {
                    return (
                      <tr key={index} className='my-2' >
                        <td className="px-4 py-4">
                          <div className='w-[70%] text-sm animate-pulse dark:bg-gray-700 bg-gray-300 rounded-full'>
                            &nbsp;
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div className='w-[70%] text-sm animate-pulse dark:bg-gray-700 bg-gray-300 rounded-full'>
                            &nbsp;
                            &nbsp;
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div className='w-[70%] text-sm animate-pulse dark:bg-gray-700 bg-gray-300 rounded-full'>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div className='w-[70%] text-sm animate-pulse dark:bg-gray-700 bg-gray-300 rounded-full'>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                    )

                  })
                }
                {
                  Data?.map((item: any, index: number) => {
                    return (
                      <tr key={index} >
                        <td className="px-4 py-3  whitespace-nowrap">{item.year}</td>
                        <td className="px-4 py-3  whitespace-nowrap">{item.month}</td>
                        <td className="px-4 py-3  whitespace-nowrap">&#8377; {item.assetsValue}</td>
                        <td className="px-4 py-3 text-lg text-white whitespace-nowrap"> &#8377; {item.profitOrLoss}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <button onClick={() => router.back()} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Go back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default BalanceSheet