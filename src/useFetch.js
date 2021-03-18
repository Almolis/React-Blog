import {useState, useEffect} from "react"; 
    
    const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

            // useEffect activates on each render
            // every time the state changes, the page is re-rendered therefore this function is run again; 
            // but if we add an empty array as a dependency, it will not re-render upon state changes
            // and if we add some dependency inside the array, it will only re-render if the state of that dependency changes
            useEffect(() => {
                fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error("Failed to get data.")
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false)
                    setError(false)
                })
                .catch(error => {
                    setError(true)
                    setIsLoading(false)
                })
            }, [url]);

            return {data, isLoading, error}
};

export default useFetch