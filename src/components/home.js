import React from 'react';
import Receipt from './receipt'
export default function HomePage(props){
    const {orders} = props

    return(
        <div>
            {orders.map(order=>{return <Receipt name={order.name} sauce={order.sauce} toppings={order.toppings} size={order.size} special={order.special} />})}
        </div>
    )
}