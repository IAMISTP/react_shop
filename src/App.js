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
import { Link, Route, Routes } from "react-router-dom";

function Product({ data, i }) {
  let srcData = `https://codingapple1.github.io/shop/shoes${i}.jpg`;
  return (
    <Col>
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
            <Link to={"/"} style={{ marginLeft: "20px" }}>
              Home
            </Link>
            <Link to={"/detail"} style={{ marginLeft: "20px" }}>
              detail
            </Link>
            <Link to={"/about"} style={{ marginLeft: "20px" }}>
              about
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container>
                <Row>
                  {shoes.map((data, i) => (
                    <Product data={data} key={i} i={++i} />
                  ))}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<div>detail</div>} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
    </div>
  );
}

export default App;
