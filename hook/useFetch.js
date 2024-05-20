import { useState, useEffect } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endPoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4a9703991emshe9e55dfb2b0b8dbp124442jsnef2219d701a2',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        params: { ...query },
      };
    
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error, Please try later.')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;