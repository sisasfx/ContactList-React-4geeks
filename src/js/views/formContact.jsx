import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { postContact, editContact } from "../service";

const objetoParaGuardar = {
    full_name: "",
    email: "",
    agenda_slug: "MikeOrtiz",
    address:"",
    phone:""           
}

const FormContact = () => {

    const {store, actions} = useContext(Context)
    const [state, setState] = useState(objetoParaGuardar)
    const {type} = useParams()


    const recordContact = (e) => {
        /*if(type === "create"){
            if(e.target.name === "full_name"){
                objetoParaGuardar.full_name = e.target.value
            }else if(e.target.name === "email"){
                objetoParaGuardar.email = e.target.value
            }else if(e.target.name === "address"){
                objetoParaGuardar.address = e.target.value
            }else {
                objetoParaGuardar.phone = e.target.value
            }
        }*/
        setState({...state , [e.target.name] : e.target.value }) 
        console.log(state)
    }

    const crearContacto = (e) =>{
        e.preventDefault()
        if(type === "edit"){
            editContact(state)
        }else{
            console.log("Creando el contacto")
           postContact(state)
        }   
    }

    useEffect(() => {
        if(type === "edit"){
            setState(store.contact)
        }
    },[])

    return(
        <div className="form-control">
            <input type="text" placeholder={"Name..."} name="full_name" onChange={recordContact} defaultValue={state.full_name}></input>
            <input type="text" placeholder={"Phone..."} name="phone" onChange={recordContact} defaultValue={state.phone}></input>
            <input type="text" placeholder={"Address..."} name="address" onChange={recordContact} defaultValue={state.address}></input>
            <input type="text" placeholder={"Email..."} name="email" onChange={recordContact} defaultValue={state.email}></input>

            <button className="btn btn-danger"onClick={crearContacto}>Guardar</button>
        </div>
    );
}

export default FormContact;