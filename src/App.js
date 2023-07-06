import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bg from "./img/bg.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "./data";
import { useState } from "react";
import "./App.css";

function Product({ data, i }) {
  let srcData = `https://codingapple1.github.io/shop/shoes${i}.jpg`;
  return (
    <Col key={i}>
      {/* <img width={"80%"} src={process.env.PUBLIC_URL + "/logo192.png"} /> */}
      <img src={srcData} width="80%" />
      <h4>{data.title}</h4>
      <h6>{data.content}</h6>
      <p>{data.price}</p>
    </Col>
  );
}

function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <Container>
        <Row>
          {shoes.map((data, i) => (
            <Product data={data} i={++i} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
