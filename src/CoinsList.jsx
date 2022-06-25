import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'

const CoinsList = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange,
    id,
    pg
  })=>{
    return (
        
                  <tbody className="divide-y divide-gray-200 bg-gray-800">
                    
                     <tr key={id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          
                            <div className="h-6 w-6 flex-shrink-0 text-white">
                            <img src={image} alt='crypto' /><span className='hidden md:block sm:hidden'>{name}</span>
                            
                            </div>
                            </td>
                            
                            
                            <td className='hidden md:block sm:hidden text-white'>
                            {symbol}
                            </td>
                            
                            <td>
                              <div className="font-medium text-white">₦{price.toLocaleString()}</div>
                              </td>
                              
                              <td>
                              <div className="text-white hidden md:block sm:hidden">₦{volume.toLocaleString()}</div>
                            
                          
                        </td>
                        
                        <td className=" text-sm ">
                        {priceChange < 0 ? (
            <span className="text-red-500">{priceChange.toFixed(2)}%</span>
          ) : (
            <span className="text-green-500">{priceChange.toFixed(2)}%</span>
          )}
                          
                          
                        </td>
                        
                       
                       
                        
                        <td className="hidden md:block sm:hidden whitespace-nowrap px-3 py-4 text-sm text-white">₦{marketcap.toLocaleString()}</td>
                        
                            <td>
                           
                                <Link to={`/Details/${id}`} className='text-white'>View</Link>
                            </td>
                        </tr>
                        
                  </tbody>
              
    
    )
  }

  export default CoinsList;