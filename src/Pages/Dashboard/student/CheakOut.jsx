import { CardElement, CartElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CheakOut = ({ price, cart, item }) => {
  const {user} = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setcardError] = useState();
  const [clientSecret, setClientSecret] = useState();
  const [processing, setProcessing] = useState(false);
  const [transectionId, setTransectionId] = useState();
  // console.log(item);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [ price, axiosSecure ]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod  } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setcardError(error.message);
    } else {
      setcardError("");
      console.log("payment method", paymentMethod);
    }
    
    setProcessing(true);

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'Unknown',
            name: user?.displayName || 'Anonymous'
          },
        },
      });
      if (confirmError) {
        console.log(confirmError);
      }
      console.log('payment intent', paymentIntent);
      setProcessing(false);
      if (paymentIntent.status === 'succeeded') {
        setTransectionId(paymentIntent.id);

  //       //save payment info to the server 
        const payment = {
           email: user?.email,
           photoURL: item?.photoURL,
           className: item?.className,
           transectionId: paymentIntent.id,
           price: item?.price,
           date: new Date(),
           seats: item.seats,
           quantity: 1,
          //  _id: item._id,
          //  courseId: item.CourseId,
          //  status: 'service pending',
          //  itemName: cart.name,           
        }
        // console.log(itemName);
        axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data);
          if (res.data.insertResult) {
            Swal.fire({
              // position: 'top-end',
              icon: 'success',
              title: 'Payment successfull',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
   
  };

  return (
    <>
      <div className="w-2/3 mx-auto mt-10" >
      <div className="w-2/3 mx-auto text-center">{cardError && <p className="text-red-600">{cardError}</p>}
      {transectionId && <p className="text-green-600">Transection complete with: {transectionId}</p>}</div>
      <form className=" mt-8  input input-bordered" 
      onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm btn-success mt-10 " type="submit" disabled={!stripe || !clientSecret || processing } > Pay </button>
      </form>
      </div>
      
    </>
  );
};

export default CheakOut;
