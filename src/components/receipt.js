import React from 'react';
import {Card, CardText, CardTitle} from 'reactstrap'
export default function Receipt(props){
    const {name, sauce, toppings, size, special} = props
    console.log('sauce', sauce, 'size', size)
    return(
            <Card style={{border:'1px solid black'}}>
                <CardTitle>Name of Customer: {name}</CardTitle>
    <CardText>Size:{size}</CardText>
    <CardText>Sauce:{sauce}</CardText>
    <CardText>Special Instructions: {special}</CardText>
            </Card>
    )
}