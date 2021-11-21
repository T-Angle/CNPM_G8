import React, { useState } from "react";
import Logo from "../components/Logo";
import { BookItem } from "../components/BookItem";

import { Input, Icon } from "semantic-ui-react";
import { Pagination } from "@mui/material";

//import css
import "../styles/Homepage.style.css";

//mock db
import { books } from "../data-book.json";

function Homepage() {
	const toggleUserManage = () => {
		let userManager = document.querySelector(".user-manager");

		userManager.classList.toggle("open");
	};

	return (
		<div className="Homepage">
			<div className="navbar">
				<Logo />

				<div className="search-box">
					<Input icon="search" placeholder="Search..." />
				</div>

				<div className="users">
					<Icon className="shopping cart" />
					<div className="personalize">
						<img
							onClick={toggleUserManage}
							src="https://images.unsplash.com/photo-1569124589354-615739ae007b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
						/>
						<span className="greeting">
							Hi, <span id="username">Lee Higgins</span>
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
									<a>Sign out</a>
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
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Computer & technology</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
						</ul>

						<ul className="criteria">
							<li className="criteria-header">Popular Subjects</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
						</ul>

						<ul className="criteria">
							<li className="criteria-header">Popular Subjects</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
							<li className="crit">Business & Money</li>
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
							return <BookItem bookData={book} key={index} />;
						})}
					</div>

					<Pagination
						className="pagination"
						count={100}
						color="primary"
						size="large"
						shape="rounded"
					/>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
