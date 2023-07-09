import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let baskets = useSelector((state) => {
    return state.baskets;
  });
  console.log(baskets);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {baskets.map((data, i) => {
            return (
              <tr key={i}>
                <td>{++i}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>안녕</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
