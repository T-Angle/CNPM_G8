import React, { useState, useEffect } from "react";

import { FaRegSadTear, FaPlus } from "react-icons/fa";
import { Input, Button, Icon, Label } from "semantic-ui-react";
import Form from "../components/Form";
import Popup from "reactjs-popup";
import moment from "moment";

import TableExamplePagination from "../components/CardActivityTable";

import axios from "axios";
import { BASE_URL } from "../api/api-url";

//import css
import "../styles/Card.style.css";
import "reactjs-popup/dist/index.css";

function Deposit({ events, close }) {
	//state config
	let [amount, setAmount] = useState(0);

	const changeAmount = (e) => {
		setAmount(e.target.innerHTML);
	};

	const onEnterAmount = (e) => {
		setAmount(e.target.value);
	};

	return (
		<>
			<Input
				icon="money"
				iconPosition="left"
				placeholder="Enter your amount..."
				style={{ marginBottom: "1em", fontSize: "16px" }}
				value={amount}
				onChange={onEnterAmount}
				type="number"
			/>

			{/* goi y khoan deposit */}
			<div className="de-xuat" style={{ display: "flex", marginBottom: "1em" }}>
				<Label.Group color="black">
					<Label as="a" onClick={changeAmount}>
						50000
					</Label>
					<Label as="a" onClick={changeAmount}>
						100000
					</Label>
					<Label as="a" onClick={changeAmount}>
						200000
					</Label>
					<Label as="a" onClick={changeAmount}>
						500000
					</Label>
				</Label.Group>
			</div>

			<Button
				primary
				onClick={() => {
					events(parseInt(amount));
					close();
				}}
			>
				Deposit
			</Button>
		</>
	);
}

const HasNoCard = ({ events }) => {
	return (
		<div className="no-card-boundary">
			<FaRegSadTear className="sad-icon" />
			<i style={{ marginTop: "5px" }}>
				<b>
					You haven't create card yet! Please click button below to create card
				</b>
			</i>
			<Popup
				modal
				trigger={
					<button className="create-card">
						<FaPlus className="plus-icon" />
						Create card
					</button>
				}
			>
				{(close) => (
					<div className="modal">
						<button className="close" onClick={close}>
							&times;
						</button>

						<Form events={events.createCard} close={close}></Form>
					</div>
				)}
			</Popup>
		</div>
	);
};

const HasCard = ({ data, events, paymentHistory }) => {
	const { thumbnail, cardId, credit, dob, expired, name, school } = data;

	return (
		<div className="has-card-boundary">
			<div className="card-boundary-inner">
				<h2>Balance: {credit}</h2>
				<div className="card-ui">
					<div
						className="top-background"
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					>
						<div className="card-brand">
							<h4>EBook</h4>
							<span>Library card</span>
						</div>

						<div className="card-bg-overlay"></div>
					</div>

					<div
						className="content-bg"
						style={{
							backgroundImage: `url(https://image.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg)`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					>
						<div className="content-name-qr">
							<div className="name">
								<span>{name}</span>
								<span>{school}</span>
							</div>
						</div>

						<div className="more-info">
							<div className="id-info">
								<p className="id">{cardId}</p>

								<div className="info">
									<div className="dob info-block">
										<span>D.O.B:</span>
										<span>{moment(dob).format("DD/MM/YYYY")}</span>
									</div>
									<div className="expire info-block">
										<span>Expired:</span>
										<span>{moment(expired).format("DD/MM/YYYY")}</span>
									</div>
								</div>
							</div>

							<div className="qrcode">
								<img src="/assets/qrcode.png"></img>
							</div>
						</div>
					</div>

					<img
						className="user-thumbnail"
						src={
							thumbnail
								? thumbnail
								: process.env.PUBLIC_URL + `/assets/user_default.png`
						}
					></img>
				</div>
				<div className="interactive-btns">
					<Popup
						modal
						trigger={
							<button
								className="int-button"
								style={{
									backgroundColor: "#db2828",
								}}
							>
								Update
							</button>
						}
					></Popup>
					<Popup
						modal
						trigger={
							<button
								className="int-button"
								style={{
									backgroundColor: "#3cba45",
								}}
							>
								Extend
							</button>
						}
					></Popup>
					<Popup
						modal
						trigger={
							<button
								className="int-button"
								style={{
									backgroundColor: "#f9bd0a",
								}}
							>
								Deposit
							</button>
						}
					>
						{(close) => (
							<div
								className="modal"
								style={{ display: "flex", flexDirection: "column" }}
							>
								<button className="close" onClick={close}>
									&times;
								</button>

								<Deposit events={events.deposit} close={close} />
							</div>
						)}
					</Popup>
				</div>
			</div>
			<div className="card-activity">
				<TableExamplePagination paymentHistory={paymentHistory} />
			</div>
		</div>
	);
};

function Card() {
	//state config
	let [hasCard, setHasCard] = useState(false);
	let [cardData, setCardData] = useState({});

	let [paymentHistory, setPaymentHistory] = useState([]);

	//events
	const createCard = async (childData) => {
		const card = await axios({
			method: "post",
			url: `${BASE_URL}/card/create-card`,
			params: {
				token: sessionStorage.getItem("token"),
			},
			data: childData,
		});

		if (card.data.statusCode === 200) {
			setHasCard(!hasCard);
			setCardData(card.data.data);
		} else {
			alert(card.data.msg);
		}
	};

	const getPaymentHistory = async () => {
		let history = await axios({
			method: "get",
			url: `${BASE_URL}/payment/paymentHistory`,
			params: {
				token: sessionStorage.getItem("token"),
			},
		});

		return history;
	};

	const deposit = async (deposit) => {
		let response = await axios({
			method: "put",
			url: `${BASE_URL}/payment/deposit`,
			params: {
				token: sessionStorage.getItem("token"),
			},
			data: {
				deposit: deposit,
			},
		});

		if (response.data.statusCode === 200) {
			response = await axios({
				method: "get",
				url: `${BASE_URL}/card/validate-card`,
				params: {
					token: sessionStorage.getItem("token"),
				},
			});

			if (response.data.statusCode === 200) {
				setCardData(response.data.data);

				let history = await getPaymentHistory();
				if (history.data.statusCode === 200) {
					setPaymentHistory(history.data.data);
				}
			}
		}
	};

	useEffect(async () => {
		let response = await axios({
			method: "get",
			url: `${BASE_URL}/card/validate-card`,
			params: {
				token: sessionStorage.getItem("token"),
			},
		});
		let history = await getPaymentHistory();

		if (history.data.statusCode === 200) {
			setPaymentHistory(history.data.data);
		}

		if (response.data.statusCode === 200) {
			setHasCard(!hasCard);
			setCardData(response.data.data);
		}
	}, []);

	return (
		<div className="Card">
			{hasCard === true ? (
				<HasCard
					data={cardData}
					events={{ deposit: deposit }}
					paymentHistory={paymentHistory}
				/>
			) : (
				<HasNoCard events={{ createCard: createCard }} />
			)}
		</div>
	);
}

export default Card;
