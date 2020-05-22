import React from 'react';
import Receipt from './receipt'
import {v4 as uuid} from 'uuid'

export default function HomePage(props){
    const {orders} = props

    return(
        <div>
            {orders.map(order=>{return <Receipt key={uuid()} name={order.name} sauce={order.sauce} toppings={order.toppings} size={order.pizzaSize} special={order.specialInstructions} />})}
        </div>
    )
}