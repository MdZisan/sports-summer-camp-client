
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";


import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import './CheckoutForm.css'
import { toast } from "react-hot-toast";

const CheckoutPayment = ({price ,allIDs,classId}) => {
    // console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
   
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

   
    useEffect(()=>{
       if(price>0){
        axios.post('https://summersportcamp-production.up.railway.app/create-payment-intent',{price})
        .then(res=>{
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
       }
    },[price])
  

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
          
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                allIDs: allIDs,
                classId : classId
                
            }
            axios.post('https://summersportcamp-production.up.railway.app/payment', payment)
                .then(res => {
                    console.log(res.data);
                    const dat= res.data
                    if (dat.paymenthistory.insertedId&&dat.allClassesUpdate.modifiedCount>0&&dat.selectedClassesUpdate.modifiedCount>0) {
                        toast.success('payment successfull')
                        // display confirm
                    }
                })
        }


    }

    return (
        <>
            <form className="w-[90%] m-8" id="payment" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4 w-full" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
               
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutPayment;