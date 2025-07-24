import React from 'react'
import CartBanner from './CartBanner'
import CheckoutSection from './CheckoutSection'
import CartTextSection from './CartTextSection'
import SubscribeSection from '../../components/SubscribeSection'

const Checkout = () => {
  return (
    <div>
         <CartBanner
          image="/assets/Cart.png"
          heading="Ready to Check Out"
          subtext="Let’s make your celebration extra special—just one step away!"
        />
        <CartTextSection/>
       <CheckoutSection/>
        <SubscribeSection/>
        
    </div>
  )
}

export default Checkout