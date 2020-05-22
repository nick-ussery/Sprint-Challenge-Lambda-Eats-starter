import React, {useState, useEffect} from "react";
import {Switch, Route, Link, NavLink} from 'react-router-dom'
import HomePage from './components/home';
import PizzaForm from './components/pizzaForm'
import formSchema from './components/formSchema'
import {Row} from 'reactstrap'
import * as yup from 'yup';


const originalFormValues = {
  name:'',
  specialInstructions:'',
  pizzaSize:'Small',
  sauce:'Regular',
  toppings:{
    Pepperoni: false,
    Sausage: false,
    CanadianBacon:false,
    SpicyItalianSausage:false,
    GrilledChicken: false,
    Onions:false,
    GreenPepper: false
}
}

const originalFormErrors = {
  name:'',
  specialInstructions:'',
  pizzaSize:'Small',
  sauce: 'Regular',
  toppings:{
    Pepperoni: false,
    Sausage: false,
    CanadianBacon: false,
    SpicyItalianSausage:false,
    GrilledChicken: false,
    Onions:false,
    GreenPepper: false
  }
}


const App = () => {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(originalFormValues)
  const [formErrors, setFormErrors] = useState(originalFormErrors)
  const [disabled, setDisabled] = useState(true)
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    console.log(name, value)
    // 🔥 STEP 12- RUN VALIDATION WITH YUP
    yup
      .reach(formSchema, name)
      // we can then run validate using the value
      .validate(value)
      .then(valid => {
        // happy path, we can clear the error message
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        // sad path, does not validate so we set the error message to the message 
        // returned from yup (that we created in our schema)
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const onCheckboxChange = evt => {
    // 🔥 STEP 8- IMPLEMENT!
    // a) pull the `name` of the checkbox from the event
    const { name } = evt.target
    // b) pull whether `checked` true or false, from the event
    const { checked } = evt.target

    console.log(name, checked)
    // c) set a new state for the whole form
    setFormValues({
      // copy formvalues
      ...formValues,
      // override one thing inside formvalues
      toppings: {
        // copy the current hobbies
        ...formValues.toppings,
        // override one of the hobbies
        [name]: checked,  // NOT AN ARRAY
      }
    })
  }

  useEffect(()=>{
    // console.log('formValues sent to schema', formValues)
    formSchema.isValid(formValues)
    .then(valid=>{
      setDisabled(!valid)
    })
  },[formValues])

  const onSubmit = evt=>{
    evt.preventDefault();

    console.log('SUBMIT')

    if(orders.length <1){
    setOrders([formValues])
    }else{setOrders([...orders, formValues])}
  }

  useEffect(()=>{
    console.log('orders was changed', orders)
    setFormValues(originalFormValues)
  },[orders])

  return (
    <div>
      <nav style={{textAlign:'right', display:'flex', justifyContent:'space-between'}}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/pizza'>Order Now</NavLink>
      </nav>
      <h1>Lambda Eats</h1>

      <Switch>

        <Route path='/pizza'><PizzaForm values={formValues} onChange={onInputChange} onSubmit={onSubmit} onCheckBox={onCheckboxChange} disabled={disabled} /></Route>
        <Route path='/'><HomePage orders={orders} /></Route>
      </Switch>
    </div>
  );
};
export default App;
