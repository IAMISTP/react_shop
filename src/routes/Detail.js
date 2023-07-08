import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

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
export function Detail(props) {
  let { id } = useParams();
  let num = parseInt(id) - 1;
  let data = props.shoes.find((x) => x.id.toString() === num.toString());
  let [alert, setAlert] = useState(true);
  let [inputValue, setInputValue] = useState("");
  let [typeCheck, setTypeCheck] = useState(true);
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
  return (
    <>
      <div className="container">
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
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}
