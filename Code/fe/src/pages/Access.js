import React, { useState, useEffect } from "react";
import { Tab, Icon } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import axios from "axios";

//import css
import "../styles/Access.style.css";

//api
import { BASE_URL } from "../api/api-url";

const createPanes = (showPwd, showConfirmPwd, showLoginPwd, events) => {
	return [
		{
			menuItem: "Login",
			render: () => (
				<Tab.Pane attached={true} className="borderless no-shadow">
					<div className="access-panel">
						<input
							id="email"
							className="access-input"
							type="email"
							placeholder="Email address"
							required
						></input>
						<input
							id="password"
							className="access-input"
							type={!showLoginPwd ? "password" : "text"}
							placeholder="Password"
							required
						></input>
						<div className="forgot-show-passwd">
							<div className="show-passwd">
								<input id="show-passwd-checkbox" type="checkbox" />
								<label
									for="show-passwd-checkbox"
									onClick={events.toggleLoginPassword}
								>
									Show password
								</label>
							</div>
							<a href="#">Forgot password?</a>
						</div>
						<button
							id="login"
							className="button borderless"
							onClick={events.Login}
						>
							Login
						</button>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Register",
			render: () => (
				<Tab.Pane attached={true} className="borderless no-shadow">
					<div className="access-panel register">
						<input
							id="username"
							className="access-input"
							type="text"
							placeholder="Username"
							required
						></input>
						<input
							id="email"
							className="access-input"
							type="email"
							placeholder="Email address"
							required
						></input>
						<div className="password-box">
							<input
								id="password"
								type={!showPwd ? "password" : "text"}
								placeholder="Password"
								required
							></input>
							<Icon
								name={!showPwd ? "eye slash" : "eye"}
								style={{ display: "flex", alignItems: "center" }}
								link
								onClick={events.togglePassword}
							/>
						</div>
						<div className="password-box">
							<input
								id="confirm-password"
								type={!showConfirmPwd ? "password" : "text"}
								placeholder="Confirm password"
								required
							></input>
							<Icon
								name={!showConfirmPwd ? "eye slash" : "eye"}
								style={{ display: "flex", alignItems: "center" }}
								link
								onClick={events.toggleConfirmPassword}
							/>
						</div>
						<button
							id="register-button"
							className="button borderless"
							onClick={events.Register}
						>
							Register
						</button>
					</div>
				</Tab.Pane>
			),
		},
	];
};

const AccessComponent = ({
	actions: { showPwd, showConfirmPwd, showLoginPwd, events },
}) => {
	return (
		<div className="Access">
			<div
				className="left-background"
				style={{
					backgroundImage: `url(/assets/access-wallpaper.jpg)`,
				}}
			>
				<div className="overlay"></div>
			</div>
			<div className="right-access-wrap">
				<div className="group-header">
					<h3>Discover hundreds of wonderful things by first login step</h3>
					<p>Access to the most huge e-book library in Vietnam</p>
				</div>

				<div className="login-register">
					<Tab
						menu={{ secondary: true, pointing: true }}
						panes={createPanes(showPwd, showConfirmPwd, showLoginPwd, events)}
					/>
				</div>

				<div className="term">
					<a href="#">Term & Services</a>
					<div className="vert-divider"></div>
					<a href="#">User guide</a>
				</div>
			</div>
		</div>
	);
};

function Access() {
	//config state
	let [showPwd, setShowPwd] = useState(false);
	let [showConfirmPwd, setShowConfirmPwd] = useState(false);
	let [showLoginPwd, setShowLoginPwd] = useState(false);

	let [isLogin, setIsLogin] = useState(false);

	const togglePassword = (e) => {
		setShowPwd(!showPwd);
	};

	const toggleConfirmPassword = (e) => {
		setShowConfirmPwd(!showConfirmPwd);
	};

	const toggleLoginPassword = (e) => {
		setShowLoginPwd(!showLoginPwd);
	};

	const Login = (e) => {
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		axios
			.post(`${BASE_URL}/auth/login`, {
				email,
				password,
			})
			.then(function ({ data }) {
				if (data.statusCode === 200) {
					sessionStorage.setItem("token", data.data.token);
					setIsLogin(true);
				} else {
					alert(data.msg);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const Register = (e) => {
		const confirmPassword = document.getElementById("confirm-password").value;
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		const username = document.getElementById("username").value;

		if (password !== confirmPassword) {
			alert("Password is not match");
		} else {
			axios
				.post(`${BASE_URL}/auth/register`, {
					username,
					email,
					password,
				})
				.then(function ({ data }) {
					if (data.statusCode === 200) {
						alert("Register succesfully! You can now login");
					} else {
						alert(data.msg);
					}
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	return isLogin ? (
		<Redirect to="/homepage" />
	) : (
		<AccessComponent
			actions={{
				showPwd,
				showConfirmPwd,
				showLoginPwd,
				events: {
					togglePassword,
					toggleConfirmPassword,
					toggleLoginPassword,
					Login,
					Register,
				},
			}}
		/>
	);
}

export default Access;
