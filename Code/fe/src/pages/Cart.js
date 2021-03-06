import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import { BookItem } from "../components/BookItem";

import { Input, Icon } from "semantic-ui-react";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import CartList from "../components/Cart/CartList";

import axios from "axios";
import { BASE_URL } from "../api/api-url";

import "../styles/Cart.style.scss";

let totalPrice = 0;

function Cart(props) {
	//state config
	let [books, setBooks] = useState([]);
	let [user, setUser] = useState([]);

	const toggleUserManage = () => {
		let userManager = document.querySelector(".user-manager");

		userManager.classList.toggle("open");
	};

	useEffect(async () => {
		let temp = Object.keys(localStorage).map((key) => {
			let parseObject = JSON.parse(localStorage.getItem(key));
			totalPrice += parseInt(parseObject.price) * parseObject.qty;
			return parseObject;
		});

		setBooks(temp);

		let user = await axios({
			method: "get",
			url: `${BASE_URL}/user/get-user`,
			params: {
				token: sessionStorage.getItem("token"),
			},
		});

		if (user.data.statusCode === 200) {
			setUser(user.data.data);
		}
	}, []);

	const payment = async () => {
		if (totalPrice > 0) {
			const card = await axios({
				method: "get",
				url: `${BASE_URL}/card/validate-card`,
				params: {
					token: sessionStorage.getItem("token"),
				},
			});

			if (card.data.statusCode === 404) {
				alert("You do not have card.");
			} else {
				const paymentMethod = await axios({
					method: "put",
					url: `${BASE_URL}/payment/paid`,
					params: {
						token: sessionStorage.getItem("token"),
					},
					data: {
						price: totalPrice,
					},
				});

				if (paymentMethod.data.statusCode === 400) {
					alert("Do not have enough credit!");
				} else if (paymentMethod.data.statusCode === 200) {
					alert(paymentMethod.data.data);
					totalPrice = 0;
					setBooks([]);
				}
			}

			Object.keys(localStorage).map((key) => {
				localStorage.removeItem(key);
			});
		} else {
			alert("Your cart is empty, please add more item");
		}
	};

	return (
		<div className="Homepage">
			<div className="navbar">
				<Logo />

				<div className="search-box">
					{/* <Input icon="search" placeholder="Search..." /> */}
				</div>

				<div className="users">
					<div className="personalize">
						<img
							onClick={toggleUserManage}
							src={
								user.thumbnail
									? user.thumbnail
									: process.env.PUBLIC_URL + `/assets/user_default.png`
							}
						/>
						<span className="greeting">
							Hi, <span id="username">{user.username}</span>
						</span>

						<ul className="user-manager">
							<li>
								<div className="manager-on-hover"></div>

								<div className="manager-wrapper">
									<Icon name="id card" />
									<a href="/dashboard/card">My Card</a>
								</div>
							</li>
							<li>
								<div className="manager-on-hover"></div>

								<div className="manager-wrapper">
									<Icon name="user" />
									<a>Profile</a>
								</div>
							</li>
							<li>
								<div className="manager-on-hover"></div>

								<div className="manager-wrapper">
									<Icon name="heart" />
									<a>wishlist</a>
								</div>
							</li>
							<li>
								<div className="manager-on-hover"></div>

								<div className="manager-wrapper">
									<Icon name="log out" />
									<a href="/">Sign out</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<CartList data={books} totalPrice={totalPrice} payment={payment} />
		</div>
	);
}

export default Cart;
