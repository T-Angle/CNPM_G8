import React, { Component } from "react";

import { FaPlus } from "react-icons/fa";

//import css
import "../styles/Profile.style.css";

//mock db
import { card_users } from "../db.json";

export default class Profile extends Component {
	render() {
		return (
			<div className="Profile">
				<div className="profile-container">
					<h2>Account Settings</h2>
					<div className="profile-avatar">
						<img src={card_users[0].user_avatar} alt="profile-avatar" />
						<div className="add-profile-avatar">
							<FaPlus />
						</div>
					</div>
					<div className="profile-control">
						<p className="row-head">Account information</p>
						<button className="control-update">Update</button>
					</div>
					<div className="profile-row">
						<p className="row-head">Email</p>
						<p className="row-tail">nguyenduckhai8101@gmail.com</p>
					</div>
					<div className="profile-row">
						<p className="row-head">Password</p>
						<p className="row-tail">***************</p>
					</div>
					<div className="profile-control">
						<p className="row-head">Personal information</p>
						<button className="control-update">Update</button>
					</div>
					<div className="profile-row">
						<p className="row-head">First name</p>
						<p className="row-tail">Khai</p>
					</div>
					<div className="profile-row">
						<p className="row-head">Last name</p>
						<p className="row-tail">Nguyen Duc</p>
					</div>
					<div className="profile-row">
						<p className="row-head">Display name</p>
						<p className="row-tail">anacondaf</p>
					</div>
					<div className="profile-row">
						<p className="row-head">Email</p>
						<p className="row-tail">nguyenduckhai8101@gmail.com</p>
					</div>
				</div>
			</div>
		);
	}
}
