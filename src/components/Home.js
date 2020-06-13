import React from 'react'
import { Card, CardImg, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

function Home(){
    return (
        <div>
            <Card>
                <CardImg src={require('../Assets/Pizza.jpg')} />
                <div style={{position: 'absolute', width: '80%', top: '50%', left: '10%', color: 'whitesmoke', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>Your favorite food, delivered while coding</h1>
                    <Link to='/pizza' >
                        <Button style={{margin: 'auto 0'}}>Pizza?</Button>
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export default Home