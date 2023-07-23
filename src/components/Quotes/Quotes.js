import { useState,useEffect } from "react";
function Quotes(){
    const [quote, setQuote] = useState([]);
    async function getQuotes() {
        let url = `postgres://localhost:5432/`;
        let response = await fetch(`${url}/quotes`);
        // console.log(response)
        let quote = await response.json();
        setQuote(quote);
    }
    useEffect(() => {
        getQuotes()
    }, [])

    
    return(
        <p></p>
    )
}

export default Quotes;