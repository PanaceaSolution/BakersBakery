import React from 'react'
import CartBanner from './CartBanner'
import SubscribeSection from '../../components/SubscribeSection'
import CartTotal from './CartTotal'


const CartPage = () => {
  return (
    <div>
       <CartBanner
          image="/assets/Cart.png"
          heading="Ready to Check Out"
          subtext="Let’s make your celebration extra special—just one step away!"
        />
      <CartTotal/>
      <SubscribeSection/>
    </div>
  )
}

export default CartPage