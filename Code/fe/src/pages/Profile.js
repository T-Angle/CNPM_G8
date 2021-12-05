import React, { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";

//import css
import "../styles/Profile.style.css";

import axios from "axios";
import { BASE_URL } from "../api/api-url";

function Profile() {
	let [user, setUser] = useState([]);

	useEffect(async () => {
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

	return (
		<div className="Profile">
			<div className="profile-container">
				<h2>Account Settings</h2>
				<div className="profile-avatar">
					<img
						src={
							user.thumbnail
								? user.thumbnail
								: process.env.PUBLIC_URL + `/assets/user_default.png`
						}
						alt="profile-avatar"
					/>
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
					<p className="row-tail">{user.email}</p>
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
					<p className="row-head">Fullname</p>
					<p className="row-tail">{user.name}</p>
				</div>
				<div className="profile-row">
					<p className="row-head">Username</p>
					<p className="row-tail">{user.username}</p>
				</div>
			</div>
		</div>
	);
}

export default Profile;
