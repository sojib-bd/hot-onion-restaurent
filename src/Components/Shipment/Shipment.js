import React from 'react';
import { useForm } from 'react-hook-form'

import { loadStripe } from '@stripe/stripe-js';
import {

    Elements,

} from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { console.log(data) }



    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>

            < form className="ship-form" onSubmit={handleSubmit(onSubmit)} style={{ lineHeight: 1.5 }}>
                {< input name="name" ref={register({ required: true })} placeholder="name" />}
                {errors.name && <span className="error">Name is required</span>}<br></br>
                {< input name="email" ref={register({ required: true })} placeholder="email" />}
                {errors.email && <span className="error">Email is required</span>}<br />
                < input name="addressLine1" ref={register({ required: true })} placeholder="addressLine1" />
                {errors.addressLine1 && <span className="error">AddressLine1 is required</span>}<br />
                < input name="addressLine2" ref={register} placeholder="addressLine2" /><br />
                < input name="city" ref={register({ required: true })} placeholder="city" />
                {errors.city && <span className="error">City is required</span>}<br />
                < input name="country" ref={register({ required: true })} placeholder="country" />
                {errors.country && <span className="error">Country is required</span>}<br />
                < input name="zipCode" ref={register({ required: true })} placeholder="Zip code" />
                {errors.zipCode && <span className="error">Zip code is required</span>}<br />

                <input type="submit" />
            </form >
            <div className="paymentCheck" style={{ width: 200 }}>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>

            </div>
        </div>
    );
};

export default Shipment;