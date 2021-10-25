import React from "react";
import { Icon } from "semantic-ui-react";

export function BookItem(props) {
	return (
		<div className="BookItem">
			<img className="book-thumbnail" src={props.thumbnail} alt="thumbnail" />

			<div className="book-info">
				<p className="title">{props.title}</p>
				<p className="publisher">Opensource</p>
				<ul className="evaluation">
					<li>
						<Icon name="star" className="bright"></Icon>
					</li>
					<li>
						<Icon name="star" className="bright"></Icon>
					</li>
					<li>
						<Icon name="star" className="bright"></Icon>
					</li>
					<li>
						<Icon name="star" className="bright"></Icon>
					</li>
					<li>
						<Icon name="star" className="bright"></Icon>
					</li>
				</ul>
				<p className="price">5000 VND</p>

				<div className="rent-wishlist">
					<button className="rent btn">Add to cart</button>
					<Icon name="heart" className="wishlist love"></Icon>
				</div>
			</div>
		</div>
	);
}
