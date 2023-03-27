import React,{useEffect, useContext} from "react";
import "../../styles/home.css";
import { getMikeOrtizAgenda } from "../service";
import { Context } from "../store/appContext";
import Contact from "../component/contact.jsx";

export const Home = () => {

	const {store, actions} = useContext(Context);

	async function getDataFromService(){
		const response = await getMikeOrtizAgenda()
		actions.addContactList(response)
	}

	useEffect(() => {
		getDataFromService()
	},[])


	return(
		<div className="text-center mt-5">
			<ul>
			{
				store.contactList.map((contact) => (
					<Contact key={contact.id} element={contact}/>
				)
			)}
			</ul>	
		</div>
	)
	
};
