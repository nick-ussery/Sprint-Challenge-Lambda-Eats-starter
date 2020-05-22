import React from 'react';
import {Form, FormGroup, FormFeedback, Label, Input, Col, Row} from 'reactstrap'
import {Link} from 'react-router-dom';


export default function PizzaForm(props){
    const {values, onChange, onSubmit, onCheckBox, disabled, errors} = props;

    return(
    <Form>
        
            <FormGroup className='name'>
                <Label>Name</Label>
                <Input name='name' type='text' placeholder='Enter Name' onChange={onChange}></Input>
    <FormFeedback name='nameError'>{errors.name}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>Sauce</Label>
                <select name='sauce' onChange={onChange}>
                    <option name='regular'>Regular</option>
                    <option name='ranch' >Ranch</option>
                    <option name='bbq' >BBQ</option>
                </select>
            </FormGroup>
            <FormGroup className='toppings'>
                <Label>Choose your Pizza Toppings</Label>

                <Col>
                    <Input onChange={onCheckBox} checked={values.toppings.Pepperoni} type='checkbox' name='Pepperoni' value='pepperoni'></Input>{'Pepperoni'}
                    <Input type='checkbox'checked={values.toppings.Sausage} onChange={onCheckBox} name='Sausage'></Input>{'Sausage'}
                    <Input type='checkbox'checked={values.toppings.CanadianBacon} onChange={onCheckBox} name='CanadianBacon'></Input>{'Canadian Bacon'}
                    <Input type='checkbox'checked={values.toppings.SpicyItalianSausage} name='SpicyItalianSausage' onChange={onCheckBox}></Input>{'Spicy Italian Sausage'}
                    <Input type='checkbox' checked={values.toppings.GrilledChicken} name='GrilledChicken' onChange={onCheckBox}></Input>{'Grilled Chicken'}
                    <Input type='checkbox'checked={values.toppings.Onions} name='Onions' onChange={onCheckBox}></Input>{'Onions'}
                    <Input type='checkbox' checked={values.toppings.GreenPepper} name='GreenPepper' onChange={onCheckBox}></Input>{'Green Pepper'}
                </Col>
                <FormFeedback></FormFeedback>
            </FormGroup>
            <FormGroup className='toppings'>
                <Label>Choose Pizza Size</Label>
                <select name='pizzaSize' onChange={onChange}>
                    <option name='small'>Small</option>
                    <option name='medium'>Medium</option>
                    <option name='large'>Large</option>
                </select>

            </FormGroup>
            <FormGroup>
                <Label>Special Instructions</Label>
                <Input type='text' name='specialInstructions' onChange={onChange} placeholder='Type special instructions here'></Input>
            </FormGroup>
            
            <button name='submit' disabled={disabled} onClick={onSubmit}>Add to Order</button>
            

        
    </Form>
    )
}