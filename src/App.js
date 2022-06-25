import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinsList from './CoinsList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Details from './Details';

export function App() {
  const [coins, setCoins] = useState([]);

  //fetch
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&order=market_cap_desc&per_page=100&page=1&sparkline=false/");
        setCoins(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);


  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  //     )
  //     .then(res => {
  //       setCoins(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(error => console.log(error));
      
  // }, []);

  // const handleChange = e => {
  //   setSearch(e.target.value);
  // };

  // const filteredCoins = coins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className='bg-gray-900'>
      <h1 className='text-white text-xl text-center md:text-2xl sm:text-xl'>9ja CoinsTracker</h1>
      <div className='flex justify-center'>
        {/* <form>
          <input
            className='py-2 px-10 w-auto rounded-full'
            type='text'
            onChange={handleChange}
            placeholder='Search Coins'
          />
        </form> */}
      </div>
      
      <div className='mx-2 md:mx-10  rounded-xl mt-10'>
      <table className="border-collapse border border-red-400 min-w-full mt-10 round-xl">
                  <thead className="bg-gray-700 min-w-full ">
                    <tr>
                      <th scope="col" className=" font-semibold text-white">
                      Coin
                      </th>
                      <th scope="col" className="hidden md:block sm:hidden text-left text-sm font-semibold text-white ">
                        Symbol
                      </th>
                      <th scope="col" className="py-3.5 pl-8 text-left text-sm font-semibold text-white md:pl-6 ">
                        Price
                      </th>
                      <th scope="col" className="hidden md:block sm:hidden text-left text-sm font-semibold text-white">
                       24h Volume
                      </th>
                      <th scope="col" className=" text-left text-sm font-semibold text-white">
                        1h
                      </th>
                      
                      <th scope="col" className="hidden md:block sm:hidden  text-left text-sm font-semibold text-white">
                        Market Cap
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  
      {coins.map(coin => {
        return (
          
          
          <CoinsList
            id={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            pg={coin.price_change_24h}
          />
          
        );
      })}
      
      </table>
    </div>
    
    </div>
  );
}
export default App;