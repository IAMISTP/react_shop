import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function Cart() {
  let baskets = useSelector((state) => {
    return state.baskets;
  });
  let user = useSelector((state) => state);
  let dispatch = useDispatch();
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
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                  <button>-</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
