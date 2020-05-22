import React from 'react';
import {Card, CardText, CardTitle} from 'reactstrap'
export default function Receipt(props){
    const {name, sauce, toppings, size, special} = props
    return(
            <Card>
                <CardTitle>{name}</CardTitle>
    <CardText>{size}</CardText>
    <CardText>{sauce}</CardText>
    <CardText>{special}</CardText>
            </Card>
    )
}