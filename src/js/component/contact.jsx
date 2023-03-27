import React, { useContext } from "react";
import { deleteContact } from "../service";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Contact = ({element}) => {
	const {store, actions} = useContext(Context)
	const navigate = useNavigate()

	const editContact = () => {
		console.log("id-->", element.id)
		actions.editContact(element)
		navigate("/form/edit")
	}

    return(
        <li key={element.id}>
			<p><strong>{element.full_name}</strong></p>
			<div>
				<p>Phone: {element.phone}</p>
				<p>Address: {element.address}</p>
				<p>Email: {element.email}</p>
			</div>
			<button className="btn btn-success" onClick={editContact}>Edit</button>	
			<button className="btn btn-danger" onClick={() => deleteContact(element)}>Delete</button>
		</li>
    );
}

export default Contact;