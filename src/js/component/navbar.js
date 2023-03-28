import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)



	return (
		<div className="navbar">
			<Link to={"/form/create"}>
				<h1>Add Contact</h1>
			</Link>
			<Link to={"/"}>
				<h1>Go Home</h1>
			</Link>		
		</div>
	);
};
