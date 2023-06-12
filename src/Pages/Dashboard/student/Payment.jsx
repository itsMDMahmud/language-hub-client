import React from 'react';
import CheakOut from './CheakOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);

const Payment =  () => {
    const {_id} = useParams();
    const [cart, refetch] = useCart();
    
    // console.log(cart);
    // console.log(id);    
    
    // const price = cart.reduce((sum, item) => item.price + sum, 0);
    // const price = cart.reduce((sum, item) => item.price + sum, 0);


    const item =  cart?.find( (singlecourse) => singlecourse?._id === _id );
    // console.log(item);
    return (
        <div>
            {/* <h2 className="text-3xl ">Total Item: {item.length}</h2> */}
        {/* <h2 className="text-3xl ">Total Amount: ${total}</h2> */}
            <Elements stripe={stripePromise}>
                <CheakOut item={item} cart={cart} price={item?.price} />
            </Elements>
        </div>
    );
};

export default Payment;