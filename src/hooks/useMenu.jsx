// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {

    const [alluser , setAlluser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {

            setAlluser(data);
            setLoading(false);
        })
    }, [])

    

    // const {data: menu = [], isLoading: loading, refetch} = useQuery({
    //     queryKey: ['menu'],
    //     queryFn: async() => {
    //         const res = await fetch('http://localhost:5000/menu');
    //         return res.json();
    //     }
    // })



    return [alluser, loading]
}

export default useMenu;