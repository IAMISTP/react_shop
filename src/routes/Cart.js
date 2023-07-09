import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delItem, increase, subtract } from "../store/basketsSlice";
import { useEffect } from "react";

function Cart() {
  let baskets = useSelector((state) => {
    return state.baskets;
  });
  let state = useSelector((state) => state);

  let dispatch = useDispatch();
  useEffect(() => {}, [baskets]);
  return (
    <div>
      {state.user.name} 의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {baskets.map((data, i) => {
            console.log(data);
            return (
              <tr key={i}>
                <td>{++i}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increase(data.id));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(subtract(data.id));
                    }}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button onClick={() => dispatch(delItem(data.id))}>
                    삭제
                  </button>
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
