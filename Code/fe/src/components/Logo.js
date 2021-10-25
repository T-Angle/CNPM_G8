import React from "react";

const styles = {
	// logo: {
	// 	position: "absolute",
	// 	top: "3em",
	// 	left: "3em",
	// 	color: "#fff",
	// 	display: "flex",
	// 	alignItems: "center",
	// 	backgroundColor: "#0092ff",
	// 	padding: "0.5em 1.5em",
	// 	// borderRadius: "30px",
	// },
	// icon: {
	// 	fontSize: "1.5em !important",
	// },
	// span: {
	// 	fontWeight: "700",
	// 	fontSize: "18px",
	// 	marginLeft: "5px",
	// },
};

function Logo() {
	return (
		<div className="logo" style={styles.logo}>
			<i aria-hidden="true" className="book big icon" style={styles.icon}></i>
			<span style={styles.span}>E-book</span>
		</div>
	);
}

export default Logo;
