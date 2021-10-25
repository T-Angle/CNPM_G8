import React, { useState } from "react";
import { Tab, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

//import css
import "../styles/Access.style.css";

const createPanes = (showPwd, showConfirmPwd, showLoginPwd, events) => {
	return [
		{
			menuItem: "Login",
			render: () => (
				<Tab.Pane attached={false} className="borderless no-shadow">
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
						<Link to="/homepage">
							<button id="login" className="button borderless">
								Login
							</button>
						</Link>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Register",
			render: () => (
				<Tab.Pane attached={false} className="borderless no-shadow">
					<div className="access-panel register">
						<input
							id="email"
							className="access-input"
							type="email"
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
						<button id="register-button" className="button borderless">
							Register
						</button>
					</div>
				</Tab.Pane>
			),
		},
	];
};

function Access() {
	//config state
	let [showPwd, setShowPwd] = useState(false);
	let [showConfirmPwd, setShowConfirmPwd] = useState(false);
	let [showLoginPwd, setShowLoginPwd] = useState(false);

	const togglePassword = (e) => {
		setShowPwd(!showPwd);
	};

	const toggleConfirmPassword = (e) => {
		setShowConfirmPwd(!showConfirmPwd);
	};

	const toggleLoginPassword = (e) => {
		setShowLoginPwd(!showLoginPwd);
	};

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
						panes={createPanes(showPwd, showConfirmPwd, showLoginPwd, {
							togglePassword,
							toggleConfirmPassword,
							toggleLoginPassword,
						})}
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
}

export default Access;
