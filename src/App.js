import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bg from "./img/bg.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "./data";
import { useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Detail } from "./routes/Detail";
import { Product } from "./routes/Product";
import axios from "axios";
import { styled } from "styled-components";

let Box = styled.div`
  background-color: ${(props) => props.color};
  width: 70%;
  margin: auto;
  padding: 10px;
`;

function App() {
  let [shoes, setShoes] = useState(data);
  let navigator = useNavigate();
  let [dataNum, setDataNum] = useState(2);
  let [showBtn, setShowBtn] = useState(true);
  let [showLoading, setShowLoading] = useState(false);
  useEffect(() => {}, [dataNum]);
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
              <button
                onClick={() => {
                  let copy = [...shoes];
                  copy.sort((a, b) => {
                    if (a.title > b.title) {
                      return 1;
                    }
                    if (a.title < b.title) {
                      return -1;
                    }
                    return 0;
                  });
                  setShoes(copy);
                }}
              >
                가나다라 순변경
              </button>
              <Container>
                <Row>
                  {shoes.map((data, i) => {
                    return <Product data={data} key={i} />;
                  })}
                </Row>
              </Container>
              {showLoading === true ? (
                <Box color="yellow">로딩중 입니다...</Box>
              ) : null}
              {showBtn === true ? (
                <button
                  onClick={() => {
                    setDataNum(dataNum + 1);
                    setShowLoading(true);
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${dataNum}.json`
                      )
                      .then(({ data }) => {
                        setShowLoading(false);
                        let copy = [...shoes, ...data];
                        setShoes(copy);
                      })
                      .catch(() => {
                        setShowLoading(false);
                        setShowBtn(false);
                      });
                  }}
                >
                  더보기
                </button>
              ) : null}
            </>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
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
