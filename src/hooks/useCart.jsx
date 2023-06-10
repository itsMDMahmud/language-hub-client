import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const {user, loading} = useAuth();
    // const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();  
    const {isLoading, refetch, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            // console.log('res from axios', res);          
            return res.json();
        }
      })
      return [cart, isLoading, refetch]
  
}

export default useCart;
