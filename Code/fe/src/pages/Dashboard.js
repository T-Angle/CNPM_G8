import React from "react";

import {
	ProSidebar,
	Menu,
	MenuItem,
	SubMenu,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

import {
	FaAddressCard,
	FaUserAlt,
	FaBook,
	FaGithub,
	FaInfo,
} from "react-icons/fa";

import { IoMdSettings } from "react-icons/io";

//import css
import "../styles/Dashboard.style.css";
import "../styles/customSideMenu.scss";

//custom component
import Card from "../pages/Card";
import Profile from "../pages/Profile";
import MyBook from "../pages/MyBook";

const routes = [
	{
		exact: true,
		path: "/dashboard",
		rightTab: () => <Profile />,
	},
	{
		path: "/dashboard/card",
		rightTab: () => <Card />,
	},
	{
		path: "/dashboard/myBook",
		rightTab: () => <MyBook />,
	},
];

function Dashboard(props) {
	return (
		<Router>
			<div className="Dashboard">
				<ProSidebar image="https://azouaoui-med.github.io/react-pro-sidebar/static/media/bg2.de0153c5.jpg">
					<SidebarHeader>
						<div className="db-logo">Ebook</div>
					</SidebarHeader>
					<SidebarContent>
						<Menu iconShape="circle">
							<SubMenu icon={<FaUserAlt />} title="Profile">
								<MenuItem icon={<FaInfo />}>Status</MenuItem>
								<MenuItem icon={<IoMdSettings />}>
									Account settings <Link to="/dashboard" />
								</MenuItem>
							</SubMenu>
							<MenuItem icon={<FaAddressCard />}>
								Card <Link to="/dashboard/card" />
							</MenuItem>
							<MenuItem icon={<FaBook />}>
								My Book <Link to="/dashboard/myBook" />
							</MenuItem>
						</Menu>
					</SidebarContent>
					<SidebarFooter>
						<div class="sidebar-btn-wrapper" style={{ padding: "20px 24px" }}>
							<a
								href="https://github.com/azouaoui-med/react-pro-sidebar"
								target="_blank"
								className="sidebar-btn"
								rel="noopener noreferrer"
							>
								<FaGithub />
								<span
									style={{
										whiteSpace: "nowrap",
										textOverflow: "ellipsis",
										overflow: "hidden",
									}}
								>
									View Source
								</span>
							</a>
						</div>
					</SidebarFooter>
				</ProSidebar>

				<div className="right-tab">
					<Switch>
						{routes.map((route, index) => (
							<Route
								exact={true}
								key={index}
								path={route.path}
								children={<route.rightTab />}
							/>
						))}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default Dashboard;
