import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

const itemPerPage = 3;

function CartList({ data, totalPrice, payment }) {
	const [curPage, setCurPage] = useState(1);

	const handlePaginationChange = (event, value) => {
		setCurPage(value);
	};

	return (
		<div className="cart">
			<table className="cart_table">
				<thead>
					<tr>
						<th width="60">Product</th>
						<th width="20%">Price</th>
						<th width="20%">Qty</th>
						<th class="text" width="20%" style={{ textAlign: "center" }}>
							Tool
						</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data
							.slice((curPage - 1) * itemPerPage, curPage * itemPerPage)
							.map((item) => (
								<tr className="">
									<td>
										<div className="cart_table-product">
											<img
												className="cart_table-image"
												src={item.thumbnail}
												width="160px"
											/>
											<p>{item.title}</p>
										</div>
									</td>
									<td style={{ textAlign: "center" }}>{item.price}</td>
									<td style={{ textAlign: "center" }}>{item.qty}</td>
									<td>
										<div className="cart_table-tools">
											<button className="btn btn-danger btn-small">
												Remove
											</button>
										</div>
									</td>
								</tr>
							))}
					<tr>
						<td style={{ textAlign: "center", fontWeight: "bold" }}>
							Tổng cộng
						</td>
						<td style={{ textAlign: "center", fontWeight: "bold" }} colSpan={3}>
							{totalPrice}
						</td>
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
			<div className="cart_tools" style={{ marginBottom: "1em" }}>
				<Link to="/homepage">
					<button className="btn btn-normal btn-large">Tiếp tục mua sắm</button>
				</Link>
				<button className="btn btn-success btn-large" onClick={payment}>
					Thanh toán
				</button>
			</div>
		</div>
	);
}

export default CartList;
