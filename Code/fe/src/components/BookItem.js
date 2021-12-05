import React from "react";
import { Icon } from "semantic-ui-react";

export function BookItem({ bookData, updateQty }) {
	const addToCart = (e) => {
		const id =
			e.currentTarget.parentNode.parentNode.parentNode.getAttribute("id");

		const itemInSessionStorage = localStorage.getItem(id);

		if (!itemInSessionStorage) {
			localStorage.setItem(id, JSON.stringify({ ...bookData, qty: 1 }));
		} else {
			let itemQty = JSON.parse(itemInSessionStorage);
			itemQty["qty"]++;

			localStorage.setItem(id, JSON.stringify(itemQty));
		}

		alert("Add item to cart");

		updateQty();
	};
	return (
		<div className="BookItem" id={bookData._id}>
			<img
				className="book-thumbnail"
				src={bookData.thumbnail}
				alt="thumbnail"
			/>

			<div className="book-info">
				<p className="title">{bookData.title}</p>
				<p className="publisher">{bookData.publisher}</p>
				<ul className="evaluation">
					{(function () {
						let a = Array(5).fill(0);

						Array.prototype.splice.apply(
							a,
							[0, 5 - (5 - bookData.evaluation)].concat(
								Array(5 - (5 - bookData.evaluation)).fill(1)
							)
						);

						let b = a.map((star) => {
							return (
								<li>
									<Icon
										name="star"
										className={star === 1 ? "bright" : ""}
									></Icon>
								</li>
							);
						});

						return b;
					})()}
				</ul>
				<p className="price">{bookData.price}</p>
				<div className="rent-wishlist">
					<button className="rent btn" onClick={addToCart}>
						Add to cart
					</button>
					<Icon name="heart" className="wishlist love"></Icon>
				</div>
			</div>
		</div>
	);
}
