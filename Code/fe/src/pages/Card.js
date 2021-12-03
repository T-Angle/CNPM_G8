import React, { useState, useEffect } from "react";

import { FaRegSadTear, FaPlus } from "react-icons/fa";
import { Button } from "semantic-ui-react";
import Form from "../components/Form";
import Popup from "reactjs-popup";
import moment from "moment";

import TableExamplePagination from "../components/CardActivityTable";

import axios from "axios";
import { BASE_URL } from "../api/api-url";

//import css
import "../styles/Card.style.css";
import "reactjs-popup/dist/index.css";

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

const HasCard = ({ data }) => {
	const { thumbnail, cardId, credit, dob, expired, name, school } = data;

	//state config
	const [showActivity, setShowActivity] = useState(true);

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
										<span>{moment(dob).format("MM/DD/YYYY")}</span>
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
					<Button color="red">Update</Button>
					<Button color="green">Extend</Button>
				</div>
			</div>
			<div className="card-activity">
				<TableExamplePagination />
			</div>
		</div>
	);
};

function Card() {
	//state config
	let [hasCard, setHasCard] = useState(false);
	let [cardData, setCardData] = useState({});

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

	useEffect(async () => {
		let response = await axios({
			method: "get",
			url: `${BASE_URL}/card/validate-card`,
			params: {
				token: sessionStorage.getItem("token"),
			},
		});

		if (response.data.statusCode === 200) {
			setHasCard(!hasCard);
			setCardData(response.data.data);
		}
	}, []);

	return (
		<div className="Card">
			{hasCard === true ? (
				<HasCard data={cardData} />
			) : (
				<HasNoCard events={{ createCard: createCard }} />
			)}
		</div>
	);
}

export default Card;
