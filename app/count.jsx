"use client";

import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { abi } from "./abi/abi.js"

function Counter() {

  const {data} = useReadContract({
    abi,
    address: "0xC99E3bD9CfC1B9996c49ac77C6CAAA61aCC1f099",
    functionName: "getCount",
  })
  console.log(data?.toString(), "data");

  const { writeContract } = useWriteContract();
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-custom-green-start to-custom-green-middle flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-5xl px-9 py-7 text-white mb-60">My Counter</h1>
      
      <div className="flex items-top space-x-4 mb-80">
        <button className="bg-gradient-to-r from-red-400 to-red-600 text-white font-bold py-2 px-4 w-32 rounded hover:from-red-600 hover:to-red-400 transition duration-300 ease-in-out" onClick={() => {
          writeContract({
            abi,
            address: "0xC99E3bD9CfC1B9996c49ac77C6CAAA61aCC1f099",
            functionName: "decreaseCount",
            args: [],
          })
        }}>
          Decrease
        </button>
        
        <span className="text-3xl font-bold text-white">{data}</span>
        
        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-4 w-32 rounded hover:bg-gradient-to-l hover:from-black hover:to-blue-500 transition duration-300 ease-in-out" onClick={() =>
        writeContract({
            
              address: '0xC99E3bD9CfC1B9996c49ac77C6CAAA61aCC1f099',
              abi,
              functionName: 'incrementCount',
              args: [],
            },     
        )}
        >
          Increase
        </button>
   
      </div>
    </div>
  );
}

export default Counter;


