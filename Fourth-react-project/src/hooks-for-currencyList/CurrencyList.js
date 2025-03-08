import {useState,useEffect} from 'react'
function useCurrencyOption (currency){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/17c9c3c9fe9e381ce1b65601/latest/${currency}`)
            .then((response) => response.json())
            .then((resp) => {
                setData(resp.conversion_rates);
            });
    }, [currency]);

    return data;
}
export default useCurrencyOption;
