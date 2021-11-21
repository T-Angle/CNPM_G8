import React, { useState } from "react";

import { FaRegSadTear, FaPlus } from "react-icons/fa";
import { Button } from "semantic-ui-react";

//import css
import "../styles/Card.style.css";

//import mock db
import { card_users } from "../db.json";

const HasNoCard = ({ events }) => {
	return (
		<div className="no-card-boundary">
			<FaRegSadTear className="sad-icon" />
			<i style={{ marginTop: "5px" }}>
				<b>
					You haven't create card yet! Please click button below to create card
				</b>
			</i>
			<button className="create-card" onClick={events.createCard}>
				<FaPlus className="plus-icon" />
				Create card
			</button>
		</div>
	);
};

const HasCard = ({ data }) => {
	const { user_avatar, user_name, school, card_id, dob, expired } = data;

	return (
		<div className="has-card-boundary">
			<div className="card-boundary-inner">
				<div className="interactive-btns">
					<Button color="red">Update</Button>
					<Button color="green">Extend</Button>
					<Button color="orange">Activities</Button>
				</div>
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
								<span>{user_name}</span>
								<span>{school}</span>
							</div>
						</div>

						<div className="more-info">
							<div className="id-info">
								<p className="id">{card_id}</p>

								<div className="info">
									<div className="dob info-block">
										<span>D.O.B:</span>
										<span>{dob}</span>
									</div>
									<div className="expire info-block">
										<span>Expired:</span>
										<span>{expired}</span>
									</div>
								</div>
							</div>

							<div className="qrcode">
								<img src="/assets/qrcode.png"></img>
							</div>
						</div>
					</div>

					<img className="user-thumbnail" src={user_avatar}></img>
				</div>
			</div>
		</div>
	);
};

function Card() {
	//state config
	let [hasCard, setHasCard] = useState(false);

	//events
	const createCard = () => {
		setHasCard(!hasCard);
	};

	return (
		<div className="Card">
			{hasCard === true ? (
				<HasCard data={card_users[0]} />
			) : (
				<HasNoCard events={{ createCard: createCard }} />
			)}
		</div>
	);
}

export default Card;
