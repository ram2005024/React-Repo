import React from 'react'
import { useState, useEffect } from 'react'
import { InputFunction } from './input'

import useCurrencyOption from './hooks-for-currencyList/CurrencyList'
export const App = () => {

  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [from,setFrom]=useState("USD");
  const [to,setTo]=  useState("NPR");
  let options =useCurrencyOption(from);
  let option=Object.keys(options);
const convert=()=>{
  setConvertedAmount(Math.floor(amount*options[to]))
}

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='h-full w-full flex items-center justify-center bg-repeat bg-cover'
        style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/digital-rupee-indian-currency-technology-background-vector_1076263-2116.jpg?uid=R190615326&ga=GA1.1.620745200.1741406883&semt=ais_hybrid')" }}>
        <form className='h-[60%] w-[30%] flex items-center justify-center'
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="h-[100%] w-[100%] px-[20px] flex flex-col items-start pt-[30px] gap-[15px] rounded-[20px] shadow-xl bg-[rgba(255,255,255,0.2)] backdrop-blur-lg"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <InputFunction
              label="from"
              selectedValue={from}
              amount={amount}
              amountDisabled={false}
              onAmountChange={(amount) => {
                setAmount(amount)
              }}
              onCurrencyChange={(currency) => {
                setFrom(currency);
              }}
              currencyOptions={option}
            />
            <button className="cursor-pointer relative left-[250px] bg-blue-500 text-white text-[1.4rem] font-semibold px-3 py-1 rounded-md hover:bg-blue-600 transition-colors mt-[-30px] mb-[-30px]"
              onClick={() => {
                setFrom(to);
                setTo(from);
     setConvertedAmount(amount);
     setAmount(convertedAmount);
               

              }}>
              Swap
            </button>
            <InputFunction
              label="to"
              selectedValue={to}
              amount={convertedAmount}
              amountDisabled={false}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}

              currencyOptions={option}
            />
            <button type='submit'
              className='cursor-pointer h-[50px] w-[90%] mx-[25px] bg-blue-500 text-white text-[1.4rem] font-semibold rounded-[10px] px-3 py-1 hover:bg-blue-600 hover:shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px,_rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] transition-all'
            >Convert {from} to {to}</button>
          </div>
        </form>
      </div>
    </div>
  )
  console.log(amount);
}
