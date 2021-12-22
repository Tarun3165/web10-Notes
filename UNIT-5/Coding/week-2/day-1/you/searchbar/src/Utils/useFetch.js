// https://api.github.com/search/users?q=masai&per_page=3

import { useEffect, useState } from "react";


export function useFetch(url) {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        
        setLoading(true);
        fetch(url)
            .then((res) => {
            // console.log("res",res);
          return res.json();
        })
            .then((res) => {
                setData(res.items) 
                setLoading(false)
            // console.log("res",res);
        })
        .catch((error) => {
            
            setError(true)
            setLoading(false);
            // console.log("error",error);
        })
        
    },[url])

    return ({
        loading,
        error,
        data}
    )
}
