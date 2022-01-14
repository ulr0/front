import logo from './logo.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductCard from './ProductCard.js'
import { useState } from 'react';
import axios from 'axios';

function App() {

  let [products, setProducts] = useState([]);


  return (
    <div className="App">
      
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">Mbly</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/products/list" onClick={()=>{
            axios.get("http://localhost:8000/products/list")
            .then((response)=>{
              let productList = response.data.product_lists;
              setProducts(productList);
          })
          }}>Products</Nav.Link>
          <Nav.Link href="#features">Sign Up</Nav.Link>
          <Nav.Link href="#pricing">Log In</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Switch>

        <Route exact path="/">
          <div className="Jumbotron">
            <h1>2022 NEW ARRIVALS!</h1>
          </div>
        </Route>

        <Route exact path="/products/list">
          <div className="container">
            <div className="row">
              {
                products.map((a, i)=>{
                  return <ProductCard product={a} key={i} />
                })
              }
            </div>
          </div>
        </Route>

      </Switch>

      

    </div>
  );
}

export default App;
