import React from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

const TableExamplePagination = () => (
	<Table basic="very" style={{ height: "100%" }}>
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>Date</Table.HeaderCell>
				<Table.HeaderCell>Status</Table.HeaderCell>
				<Table.HeaderCell>Description</Table.HeaderCell>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			<Table.Row positive>
				<Table.Cell width={3}>12:45 10/12/2021</Table.Cell>
				<Table.Cell width={3}>
					<Icon name="checkmark" />
					Success
				</Table.Cell>
				<Table.Cell width={7}>None</Table.Cell>
			</Table.Row>
			<Table.Row negative>
				<Table.Cell width={3}>12:45 10/12/2021</Table.Cell>
				<Table.Cell width={3}>
					<Icon name="checkmark" />
					Fail
				</Table.Cell>
				<Table.Cell width={7}>None</Table.Cell>
			</Table.Row>
			<Table.Row positive>
				<Table.Cell width={3}>12:45 10/12/2021</Table.Cell>
				<Table.Cell width={3}>
					<Icon name="checkmark" />
					Success
				</Table.Cell>
				<Table.Cell width={7}>None</Table.Cell>
			</Table.Row>
			<Table.Row negative>
				<Table.Cell width={3}>12:45 10/12/2021</Table.Cell>
				<Table.Cell width={3}>
					<Icon name="checkmark" />
					Fail
				</Table.Cell>
				<Table.Cell width={7}>None</Table.Cell>
			</Table.Row>
			<Table.Row positive>
				<Table.Cell width={3}>12:45 10/12/2021</Table.Cell>
				<Table.Cell width={3}>
					<Icon name="checkmark" />
					Success
				</Table.Cell>
				<Table.Cell width={7}>None</Table.Cell>
			</Table.Row>
			<Table.Row negative>
				<Table.Cell width={3}>12:45 10/12/2021</Table.Cell>
				<Table.Cell width={3}>
					<Icon name="checkmark" />
					Fail
				</Table.Cell>
				<Table.Cell width={7}>None</Table.Cell>
			</Table.Row>
		</Table.Body>

		<Table.Footer>
			<Table.Row>
				<Table.HeaderCell colSpan="3">
					<Menu floated="right" pagination>
						<Menu.Item as="a" icon>
							<Icon name="chevron left" />
						</Menu.Item>
						<Menu.Item as="a">1</Menu.Item>
						<Menu.Item as="a">2</Menu.Item>
						<Menu.Item as="a">3</Menu.Item>
						<Menu.Item as="a">4</Menu.Item>
						<Menu.Item as="a" icon>
							<Icon name="chevron right" />
						</Menu.Item>
					</Menu>
				</Table.HeaderCell>
			</Table.Row>
		</Table.Footer>
	</Table>
);

export default TableExamplePagination;
