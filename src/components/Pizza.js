
import { Card, CardHeader, CardImg, Form, Input, Label, FormGroup, Col, CardBody, Button } from 'reactstrap';
import React, {useState} from 'react';
import * as Yup from 'yup';
import axios from 'axios'

function Pizza(props) {
    const blank = {
        name: '',
        size: 'Small',
        sauce: 'red',
        pepperoni: true,
        tomatoes: false,
        sausage: false,
        olive: false,
        ham: false,
        garlic: false,
        isausage: false,
        artichoke: false,
        chicken: false,
        threecheese: false,
        onion: false,
        illegal: false,
        pepper: false,
        cheese: false,
        instructions: ''
    }
    const [menuOpen, setMenuOpen] = useState(false)
    const toggle = () => setMenuOpen(prevState => !prevState)
    const [pizza, setPizza] = useState(blank)
    const [valid, setValid] = useState(false);

    const [errors, setErrors] = useState({
        name: ''
    })

    const formSchema = Yup.object().shape({
        name: Yup
        .string()
        .min(2, "Name must be at least 2 characters long")
        .required("Must Enter a Name")
    })

    function validateContent(e){
        Yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid =>{
            setErrors({
                ...errors,
                [e.target.name]: ''
            })
        })
        .catch(err =>{
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            })
        })
    }
//*/
    function handleChanges(e){
        e.persist()
        if(e.target.name === 'name'){
            validateContent(e)
        }
        console.log(e.target)
        setPizza({...pizza, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.post("https://reqres.in/api/users", pizza)
        .then(res =>{
            console.log(res)
            props.add(res);
            setPizza(blank)
        })
        
    }


    return(
        <div>
            <Card>
                <CardHeader>
                    <h1>Build Your Own Pizza</h1>
                    <CardImg src={require('../Assets/Pizza.jpg')} />
                </CardHeader>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor='name'>
                        Name for Order
                        <input id='name' type='text' name='name' value={pizza.name} onChange={handleChanges} cy-data='namefield'/>
                        <p>{errors.name !== '' ? errors.name : ''}</p>
                    </label>
                    <CardHeader>
                        <h1>Choose Your Size</h1>
                    </CardHeader>
                    <select name='size' onChange={handleChanges}>
                                <option> Small </option>
                                <option> Medium </option>
                                <option> Large </option>
                                <option> Extra Large </option>
                    </select>
                    <CardHeader>
                        <h1>Choose your Sauce</h1>
                        
                    </CardHeader>
                    <FormGroup>
                    <label>
                        <input type='radio' name='sauce' value='red' checked={pizza.sauce === 'red'} onChange={handleChanges} />
                        Red
                        </label>
                        </FormGroup>
                        <FormGroup>
                        <label>
                        <input type='radio' name='sauce' value='white' checked={pizza.sauce === 'white'} onChange={handleChanges} />
                        White
                        </label>
                        </FormGroup>
                        <FormGroup>
                        <label>
                        <input type='radio' name='sauce' value='bbq' checked={pizza.sauce === 'bbq'} onChange={handleChanges} />
                        BBQ
                        </label>
                        </FormGroup>
                        <FormGroup>
                        <label>
                        <input type='radio' name='sauce' value='pesto' checked={pizza.sauce === 'pesto'} onChange={handleChanges} />
                        Pesto
                        </label>
                        </FormGroup>
                    <CardHeader>
                        <h1>Toppings</h1>
                    </CardHeader>
                    <CardBody>
                    <Col sm={12} style={{width: '100%'}}>
                        <FormGroup>
                        <Label><Input type='checkbox' name='pepperoni' cy-data='pepperoni' checked= {pizza.pepperoni} onChange={handleChanges} />Pepperoni</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='tomatoes' checked= {pizza.tomatoes} onChange={handleChanges} />Diced Tomatoes</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='sausage' cy-data='sausage' checked= {pizza.sausage} onChange={handleChanges} />Sausage</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='olive' checked= {pizza.olive} onChange={handleChanges} />Black Olives</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='ham' checked= {pizza.ham} onChange={handleChanges} />Canadian Bacon</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='garlic' checked= {pizza.garlic} onChange={handleChanges} />Roasted Garlic</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='isausage' checked= {pizza.isausage} onChange={handleChanges} />Spicy Italian Sausage</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='artichoke' checked= {pizza.artichoke} onChange={handleChanges} />Artichoke Hearts</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='chicken' checked= {pizza.chicken} onChange={handleChanges} />Grilled Chicken</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='threecheese' checked= {pizza.threecheese} onChange={handleChanges} />Three Cheese</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='onion' cy-data='onion' checked= {pizza.onion} onChange={handleChanges} />Onions</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='illegal' checked= {pizza.illegal} onChange={handleChanges} />Pinapple</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='pepper' checked= {pizza.pepper} onChange={handleChanges} />Green Pepper</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='cheese' checked= {pizza.cheese} onChange={handleChanges} />Extra Cheese</Label>
                        </FormGroup>
                    </Col>
                    </CardBody>
                    <FormGroup>
                    <Label style={{width: '100%'}}>
                        Special Instructions
                    <Input type='textarea' name='instructions' onChange={handleChanges} ></Input>
                    
                    </Label>
                    </FormGroup>
                    <Button cy-data='orderpizza' onSubmit={handleSubmit} value={pizza.instructions}>Order!</Button>
                </Form>
            </Card>
        </div>
    )
}

export default Pizza