import * as yup from 'yup'

// valid formValues should be like follows:
const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .min(3, 'The username must be at least three characters long')
        .required('The username is a required field'),
    pizzaSize: yup.string(),
    specialInstructions: yup.string().trim(),
    pizzaSize:yup.string(),
    sauce: yup.string(),
    Pepperoni: yup.bool(),
    Sausage:  yup.bool(),
    CanadianBacon: yup.bool(),
    SpicyItalianSausage: yup.bool(),
    GrilledChicken:  yup.bool(),
    Onions: yup.bool(),
    GreenPepper:  yup.bool()
})

export default formSchema