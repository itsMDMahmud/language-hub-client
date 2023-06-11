import React from 'react';
import CheakOut from './CheakOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

const Payment = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
    const price = cart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div>
            <h2 className="text-3xl ">Total Item: {cart.length}</h2>
        {/* <h2 className="text-3xl ">Total Amount: ${total}</h2> */}
            <Elements stripe={stripePromise}>
                <CheakOut cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;