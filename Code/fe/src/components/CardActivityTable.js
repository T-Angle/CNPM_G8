import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { Pagination } from "@mui/material";

import moment from "moment";

const qtyHistory = 6;
let currentPage = 1;
let offset = 0;

const TableExamplePagination = ({ paymentHistory }) => {
	let [paginatedHistory, setPaginatedHistory] = useState([]);

	useEffect(() => {
		paginate(null, currentPage);
	}, [paginatedHistory]);

	//paginate function
	let paginate = async (event, page) => {
		if (page - currentPage < 0) {
			offset = page === 1 ? 0 : offset - qtyHistory;
		}

		if (page - currentPage > 0) {
			offset = offset + qtyHistory;
		}

		let end = offset + qtyHistory;

		currentPage = page;

		setPaginatedHistory(paymentHistory.slice(offset, end));
	};

	return (
		<Table basic="very" style={{ height: "100%" }}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Date</Table.HeaderCell>
					<Table.HeaderCell>Status</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{paginatedHistory.map((payment, key) => {
					return (
						<Table.Row
							className={payment.status === "Success" ? "positive" : "negative"}
						>
							<Table.Cell width={3}>
								{moment(payment.date).format("DD/MM/YYYY")}
							</Table.Cell>
							<Table.Cell width={3}>
								<Icon
									name={
										payment.status === "Success" ? "checkmark" : "attention"
									}
								/>
								{payment.status}
							</Table.Cell>
							<Table.Cell width={7}>{payment.description}</Table.Cell>
						</Table.Row>
					);
				})}
			</Table.Body>

			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan="3">
						<Pagination
							className="pagination"
							count={10}
							color="primary"
							size="large"
							shape="rounded"
							onChange={(event, page) => {
								paginate(event, page);
							}}
						/>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		</Table>
	);
};

export default TableExamplePagination;
