import React, { useState } from 'react'
import { Card, CardHeader, CardImg, Form, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Label, FormGroup, Col, CardBody, Row, Button } from 'reactstrap'

function Pizza(props) {
    const blank = {
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

    function handleChanges(e){
        console.log(e.target)
        setPizza({...pizza, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.add(pizza);
    }


    return(
        <div>
            <Card>
                <CardHeader>
                    <h1>Build Your Own Pizza</h1>
                    <CardImg src={require('../Assets/Pizza.jpg')} />
                </CardHeader>
                <Form onSubmit={handleSubmit}>
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
                        <Label><Input type='checkbox' name='pepperoni' checked= {pizza.pepperoni} onChange={handleChanges} />Pepperoni</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='tomatoes' checked= {pizza.tomatoes} onChange={handleChanges} />Diced Tomatoes</Label>
                        </FormGroup>
                        <FormGroup>
                        <Label><Input type='checkbox' name='sausage' checked= {pizza.sausage} onChange={handleChanges} />Sausage</Label>
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
                        <Label><Input type='checkbox' name='onion' checked= {pizza.onion} onChange={handleChanges} />Onions</Label>
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
                    <Button onSubmit={handleSubmit} value={pizza.instructions}>Order!</Button>
                </Form>
            </Card>
        </div>
    )
}

export default Pizza