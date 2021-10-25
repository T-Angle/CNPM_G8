import React, { useState } from "react";
import Logo from "../components/Logo";
import { BookItem } from "../components/BookItem";

import { Input, Icon } from "semantic-ui-react";
import { Pagination } from "@mui/material";

//import css
import "../styles/Homepage.style.css";

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
									<a>My Card</a>
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
						<BookItem
							title="Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services"
							thumbnail="https://images-na.ssl-images-amazon.com/images/I/51dU7JA2hbL._SX379_BO1,204,203,200_.jpg"
						/>
						<BookItem
							title="You Don't Know JS Yet: Scope & Closures - 1st Edition"
							thumbnail="https://images-na.ssl-images-amazon.com/images/I/71DjgMQb3bL.jpg"
						/>
						<BookItem
							title="The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations"
							thumbnail="https://images-na.ssl-images-amazon.com/images/I/81B4f4soNAL.jpg"
						/>
						<BookItem
							title="Clean Architecture: A Craftsman's Guide to Software Structure and Design"
							thumbnail="https://images-na.ssl-images-amazon.com/images/I/41TPrNDI50L._SX387_BO1,204,203,200_.jpg"
						/>
						<BookItem
							title="Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services"
							thumbnail="https://images-na.ssl-images-amazon.com/images/I/51dU7JA2hbL._SX379_BO1,204,203,200_.jpg"
						/>
						<BookItem
							title="You Don't Know JS Yet: Scope & Closures - 1st Edition"
							thumbnail="https://images-na.ssl-images-amazon.com/images/I/71DjgMQb3bL.jpg"
						/>
						<BookItem
							title="The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations"
							thumbnail="https://images-na.ssl-images-amazon.com/images/I/81B4f4soNAL.jpg"
						/>
						<BookItem
							title="Clean Architecture: A Craftsman's Guide to Software Structure and Design"
							thumbnail="https://images-na.ssl-images-amazon.com/images/I/41TPrNDI50L._SX387_BO1,204,203,200_.jpg"
						/>
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
