// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {

    const [alluser , setAlluser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://language-hub-server.vercel.app/users')
        .then(res => res.json())
        .then(data => {

            setAlluser(data);
            setLoading(false);
        })
    }, [])

    

    // const {data: menu = [], isLoading: loading, refetch} = useQuery({
    //     queryKey: ['menu'],
    //     queryFn: async() => {
    //         const res = await fetch('https://language-hub-server.vercel.app/menu');
    //         return res.json();
    //     }
    // })



    return [alluser, loading]
}

export default useMenu;