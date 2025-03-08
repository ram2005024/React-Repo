import {useState} from 'react'
export const InputFunction=({
    label,
selectedValue,
amount,
onAmountChange,
onCurrencyChange,
currencyOptions,
amountDisabled



})=>{

return (
<>
<div className="h-[150px] w-[90%] flex justify-between px-[10px] mx-[25px] bg-white rounded-[10px]">
<div className="w-[40%] h-full flex flex-col gap-[30px]">
    <div>
    <label htmlFor={label} className="text-gray-500 text-[1.4rem] font-medium">{label}</label>
    </div>
<div>
    <input id={label} type="number"
      className="w-[150px] h-auto text-[1.4rem] border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
      value={amount}
      onChange={(e)=>{
        onAmountChange&&onAmountChange(e.target.value)
        
      }}
      disabled={false}
    />
</div>
</div>


<div className="w-[40%] h-full flex flex-col gap-[30px] ">
<p className="text-gray-500 text-[1.4rem] font-medium">
        Change Currency
</p>
<select name="SelectCurrency"
 id="currencySelector"
 className="w-[150px] h-auto text-[1.4rem] border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
 disabled={amountDisabled}
 value={selectedValue}
 onChange={(e)=>{
    onCurrencyChange&&onCurrencyChange(e.target.value)
 }}
 >
   { currencyOptions.map((currency, index)=>(
<option key={index} value={currency}>{currency}</option>
    ))}
 </select>

</div>
</div>

</>

)



    
}
