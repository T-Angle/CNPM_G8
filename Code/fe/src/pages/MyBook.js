import React, { Component } from "react";

import { FaPlay } from "react-icons/fa";

//import css
import "../styles/MyBook.style.css";

// //mock db
// import { card_users } from "../db.json";
import { books } from "../data-book.json";

function MyBook() {
	return (
		<div className="MyBook">
			<div className="mybook-container">
				{books.map((book, index) => {
					return (
						<div className="mybook-thumbnail">
							<img src={book.thumbnail} />
							<div className="book-overlay">
								<span>
									<FaPlay />
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MyBook;
