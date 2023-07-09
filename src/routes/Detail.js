import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Context1 } from "../App";
import { useDispatch } from "react-redux";
import { addItem } from "../store/basketsSlice";

let YellowBtn = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  padding: 10px;
`;
let Box = styled.div`
  background-color: grey;
  padding: 20px;
`;
let WarningBox = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
  width: 100%;
`;
//기존 스타일 복사도 가능
let NewBtn = styled.button(YellowBtn);
function Detail(props) {
  let { id } = useParams();
  let num = parseInt(id) - 1;
  let data = props.shoes.find((x) => x.id.toString() === num.toString());
  let [alert, setAlert] = useState(true);
  let [inputValue, setInputValue] = useState("");
  let [typeCheck, setTypeCheck] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState("");
  let dispatch = useDispatch();
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    setTypeCheck(isNaN(inputValue));
  }, [inputValue]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, []);
  useEffect(() => {
    let newData = JSON.parse(localStorage.getItem("watched"));
    if (newData.includes(data.id) === false) {
      newData.push(data.id);
    }
    localStorage.setItem("watched", JSON.stringify(newData));
  }, []);
  return (
    <div>
      <div className={`container start ${fade}`}>
        {alert === true ? (
          <div className="alert alert-warning ">2초 이내 구매시 할인</div>
        ) : null}
        <Box>
          <YellowBtn bg="blue">버튼</YellowBtn>
          <YellowBtn bg="orange">버튼</YellowBtn>
        </Box>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            {typeCheck === true ? (
              <WarningBox>경고 : 숫자만 입력하세요</WarningBox>
            ) : null}
            <input onChange={(e) => setInputValue(e.target.value)} />
            <h4 className="pt-5">{data.title}</h4>
            <p>{data.content}</p>
            <p>{data.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(addItem(data));
              }}
            >
              주문하기
            </button>
          </div>
        </div>
        <Nav fill variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
              eventKey="link-0"
            >
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
              eventKey="link-1"
            >
              Loooonger NavLink
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
              eventKey="link-2"
            >
              Link
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabComponent tab={tab} />
      </div>
    </div>
  );
}

function TabComponent({ tab }) {
  let { 재고 } = useContext(Context1);
  let [fade, setFade] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
  // if (tab === 0) {
  //   return <div>내용0</div>;
  // }
  // if (tab === 1) {
  //   return <div>내용1</div>;
  // }
  // if (tab === 2) {
  //   return <div>내용2</div>;
  // }
}
export default Detail;
