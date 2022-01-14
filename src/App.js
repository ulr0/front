import logo from './logo.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">Mbly</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Products</Nav.Link>
          <Nav.Link href="#features">Sign Up</Nav.Link>
          <Nav.Link href="#pricing">Log In</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className="Jumbotron">
        <h1>2022 NEW ARRIVALS!</h1>
      </div>

      

    </div>
  );
}

export default App;
