import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Product({ data }) {
  let navigator = useNavigate();
  let srcData = `https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`;
  return (
    <Col
      style={{ flex: "1 0 30%" }}
      onClick={() => navigator(`/detail/${data.id + 1}`)}
    >
      <img src={srcData} width="80%" />
      <h4>{data.title}</h4>
      <h6>{data.content}</h6>
      <p>{data.price}</p>
    </Col>
  );
}
export default Product;
