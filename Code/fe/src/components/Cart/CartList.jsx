import React, { useState } from 'react';
import { Pagination } from "@mui/material";
import { Link } from 'react-router-dom';

const itemPerPage = 3;

function CartList({ data, ...props }) {

  const [curPage, setCurPage] = useState(1);

  const handlePaginationChange = (event, value) => {
    setCurPage(value);
  };
  console.log("data", data)
  return (
    <div className="cart">
      <table className="cart_table">
        <thead>
          <tr>
            <th width="60">
              Sản phẩm
            </th>
            <th width="20%">Giá</th>
            <th class="text" width="20%" style={{ textAlign: "center" }}>
              Công cụ
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.slice((curPage - 1) * itemPerPage, curPage * itemPerPage).map((item) => (
              <tr className="">
                <td>
                  <div className="cart_table-product">
                    <img className="cart_table-image" src={item.thumbnail} width="160px" />
                    <p>{item.title}</p>
                  </div>
                </td>
                <td style={{ textAlign: "center" }}>
                  {item.price}
                </td>
                <td>
                  <div className="cart_table-tools" >
                    <button className="btn btn-danger btn-small">
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          <tr>
            <td style={{ textAlign: "center" }}>
              Tổng cộng
            </td>
            <td style={{ textAlign: "center" }}>
              $1234
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Pagination
        className="cart_pagination"
        count={Math.ceil((data.length - 1) / itemPerPage)}
        color="primary"
        size="large"
        shape="rounded"
        onChange={handlePaginationChange}
      />
      <div className="cart_tools">
        <Link to="/homepage">
          <button className="btn btn-normal btn-large">
            Tiếp tục mua sắm
          </button>
        </Link>
        <button className="btn btn-success btn-large">
          Thanh toán
        </button>
      </div>
    </div>
  );
}

export default CartList;