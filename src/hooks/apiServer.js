import { useEffect, useState } from "react"

export const useFetch = (url) => { 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState();
    const [images, setImages] = useState([]);

    useEffect(() => { 
        async function getAllPokemons() { 
            setImages([]);
            setLoading(true);
            const response = await fetch(url);
            const responseJson = await response.json();
            const resultJson = await responseJson.results;
            resultJson.map( async (item, index) => {
                const res = await fetch(item.url);
                const json = await res.json();
                setImages((prevValue) => [...prevValue, json.sprites.front_default]);
            });
            setData(resultJson);
            setLoading(false);            
        }  

        getAllPokemons();

    }, [url]);

    return {data, loading, images}
}