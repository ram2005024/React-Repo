export const ErrorPart=()=>{
    return(
    <>
    <div className=" flex flex-col justify-center gap-[15px] items-center  h-[420px] w-[screen]">
    <img src="no-result.svg" className="myErrorimage" alt="image" />
    <h1 className=" text-[0.2rem] font-bold text-white text-center mt-4">
   Something went wrong
</h1>
<p className="myErrorText">
We’re unable to retrieve weather data for the specified location. Please check your input and try again with a valid location.
</p>
    </div>
    </>
    )
}
