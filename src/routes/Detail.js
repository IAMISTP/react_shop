import { useParams } from "react-router-dom";

export function Detail(props) {
  let { id } = useParams();
  let num = parseInt(id) - 1;
  let data = props.shoes.find((x) => x.id.toString() === num.toString());
  return (
    <>
      <div className="container">
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
