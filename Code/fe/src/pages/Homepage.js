import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import { BookItem } from "../components/BookItem";
import axios from "axios";
import { BASE_URL } from "../api/api-url";

import { Input, Icon } from "semantic-ui-react";
import { Pagination } from "@mui/material";

//import css
import "../styles/Homepage.style.css";

import { Link } from "react-router-dom";

const qtyShowedBook = 6;
let currentPage = 1;
let offset = 0;

function Homepage() {
	//state config
	let [books, setBooks] = useState([]);
	let [cartQty, setCartQty] = useState(0);
	let [user, setUser] = useState([]);

	useEffect(async () => {
		setCartQty(Object.keys(localStorage).length);
		paginate(null, currentPage);

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

	const toggleUserManage = () => {
		let userManager = document.querySelector(".user-manager");

		userManager.classList.toggle("open");
	};

	//paginate function
	let paginate = async (event, page) => {
		if (page - currentPage < 0) {
			offset = page === 1 ? 0 : offset - qtyShowedBook;
		}

		if (page - currentPage > 0) {
			offset = offset + qtyShowedBook;
		}

		let end = offset + qtyShowedBook;

		currentPage = page;

		let res = await axios({
			method: "get",
			url: `${BASE_URL}/book/get-all-books`,
		});

		setBooks(res.data.data.slice(offset, end));
	};

	const updateCartQty = () => {
		setCartQty(Object.keys(localStorage).length);
	};

	return (
		<div className="Homepage">
			<div className="navbar">
				<Logo />

				<div className="search-box">
					<Input icon="search" placeholder="Search..." />
				</div>

				<div className="users">
					<Link to="/cart" style={{ color: "black" }} className="cart-item">
						<Icon className="shopping cart" />
						<span className="cart-qty">{cartQty}</span>
					</Link>
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
									<a href="/dashboard">Profile</a>
								</div>
							</li>
							<li>
								<div className="manager-on-hover"></div>

								<div className="manager-wrapper">
									<Icon name="heart" />
									<a href="/dashboard/myBook">wishlist</a>
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

			<div className="book-shelf">
				<div className="book-genres">
					<div className="genres-inner">
						<ul className="criteria">
							<li className="criteria-header">Popular Subjects</li>
							<li className="crit">Technology</li>
						</ul>
					</div>
				</div>

				<div className="book-lists">
					<div className="function-bar">
						<div className="display-buttons">
							<Icon name="filter" className="display-icon" />
						</div>
					</div>

					<div className="books">
						{books.map((book, index) => {
							return (
								<BookItem
									bookData={book}
									key={index}
									updateQty={updateCartQty}
								/>
							);
						})}
					</div>

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
				</div>
			</div>
		</div>
	);
}

export default Homepage;
