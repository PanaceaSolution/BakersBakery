import React from 'react'
import CartBanner from './CartBanner'
import CheckoutSection from './CheckoutSection'

const Checkout = () => {
  return (
    <div>
         <CartBanner
          image="/assets/Cart.png"
          heading="Ready to Check Out"
          subtext="Let’s make your celebration extra special—just one step away!"
        />
       <CheckoutSection/>

        
    </div>
  )
}

export default Checkout