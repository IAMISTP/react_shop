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

//기존 스타일 복사도 가능
let NewBtn = styled.button(YellowBtn);
export function Detail(props) {
  let { id } = useParams();
  let num = parseInt(id) - 1;
  let data = props.shoes.find((x) => x.id.toString() === num.toString());
  let [styleDisplay, setStyleDisplay] = useState("visible");
  useEffect(() => {
    setTimeout(() => {
      setStyleDisplay("hidden");
    }, 2000);
  });
  return (
    <>
      <div className="container">
        <div
          className="alert alert-warning "
          style={{ visibility: styleDisplay }}
        >
          2초 이내 구매시 할인
        </div>
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
