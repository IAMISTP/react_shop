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
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Detail } from "./routes/Detail";

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
  let navigator = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => navigator("/")}
              style={{ marginLeft: "20px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => navigator("/detail")}
              style={{ marginLeft: "20px" }}
            >
              detail
            </Nav.Link>
            <Link to={"/about"} style={{ marginLeft: "20px" }}>
              about
            </Link>
            <Link to={"/event"} style={{ marginLeft: "20px" }}>
              event
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
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

        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>}></Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버조회 페이지 입니다.</div>} />
          <Route path="location" element={<div>location 페이지 입니다.</div>} />
        </Route>
        <Route
          path="/about/member"
          element={<div>멤버조회 페이지 입니다.</div>}
        />
        <Route
          path="/about/location"
          element={<div>location 페이지 입니다.</div>}
        />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      About페이지 입니다.
      <Outlet></Outlet>
    </div>
  );
}
function Event() {
  return (
    <div>
      오늘의 이벤트
      <Outlet></Outlet>
    </div>
  );
}

export default App;
