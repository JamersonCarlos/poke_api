import { useEffect, useState } from "react"

export const useFetch = (url) => { 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => { 
        async function getAllPokemons() { 
            setLoading(true);
            const response = await fetch(url);
            const responseJson = await response.json();
            const resultJson = await responseJson.results;
            setData(resultJson);
            setLoading(false);            
        }  

        getAllPokemons();

    }, [url]);
    
    return {data, loading}
}