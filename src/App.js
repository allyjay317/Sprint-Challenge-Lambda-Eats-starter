import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Pizza from './components/Pizza'
import { Navbar, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const App = () => {

  function addOrder(pizza){
    console.log(pizza);
  }

  return (
    <>
      <Navbar>
        <h1>Lambda Eats</h1>
        <Link to='/'>
          <Button>Home</Button>
        </Link>
      </Navbar>
      <Route exact path='/' component={Home}/>
      <Route path='/pizza'>
        <Pizza add={addOrder} />
      </Route>
    </>
  );
};
export default App;
