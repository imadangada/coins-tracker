import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Details  =  () => {
  const {id} = useParams();
  const [coins, setCoins] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&order=market_cap_desc&per_page=100&page=1&sparkline=false/Details/${id}`);
        setCoins(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
    

   //const {name, price, symbol} = coins.find((coins) => coins.id===id)
    return ( 
        <div className='bg-gray-900'>
           
               
      <h1 className='text-white text-xl text-center md:text-2xl sm:text-xl'>Details About {id} </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-4 gap-0 md:gap-4 mx-10 mt-10">

      <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900"></h1>
          
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
         
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-yellow-900">
                <thead className="bg-gray-600">
                  <tr className="divide-x divide-yellow-900">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="divide-y divide-yellow-500 bg-gray-800">
                  
                    <tr className="">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-white sm:pl-6">
                        {coins.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{coins.price}</td>
                      </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
                  
  
            <div className="bg-gray-600"><span className="text-white text-2xl"></span></div>
            <div className="bg-gray-600">Name</div>
            <div className="bg-gray-600"><span className="text-white text-2xl"></span></div>
            
             </div>
             
        </div>
       
    
     );
    
};

export default Details;