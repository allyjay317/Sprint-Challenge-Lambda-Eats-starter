import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Pizza from './components/Pizza'
import { Navbar, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([])

  function addOrder(pizza){
    console.log(pizza);
    setPosts([...posts, pizza])
  }

  return (
    <>
      <Navbar>
        <h1>Lambda Eats</h1>
        <Link to='/'>
          <Button cy-data='homebutton'>Home</Button>
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
