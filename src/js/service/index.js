const URL = "https://assets.breatheco.de/apis/fake/contact/"

export async function getMikeOrtizAgenda(){
    try{
        const response = await fetch(`${URL}/agenda/MikeOrtiz`, {method: "GET"});
        return response.json()
    }catch(err){
        console.log(err)
    }   
}

export async function postContact(newContact){
    console.log("Desde el service",newContact)
    try{
        await fetch(`${URL}`, {method: "POST", body: JSON.stringify(newContact), headers: {"Content-Type" : "application/json"}, redirect:"follow"})
        .then(req => {
            console.log(req)
            if(req.ok){
                getMikeOrtizAgenda()
            }
            else{console.log("CAGADA PASTORET", req.statusText)}
        })
    }catch(err){
        console.log("En el catch del POST-->",err)
    }
}

export async function editContact(editContact){
    console.log("DESDE EL SERVICIO",editContact.id)
    try{
       const resp = await fetch(`${URL}${editContact.id}`, {method:"PUT", body: JSON.stringify(editContact), headers: {"Content-Type" : "application/json"}});
       return await resp.json()
    }catch(err){
        console.log("ERROR AL EDITAR! --> ",err)
    }
}

export async function deleteContact(deleteContact){
    try{
        await fetch(`${URL}${deleteContact.id}`, {method:"DELETE" , headers: {"Content-Type" : "application/json"}})
    }catch(err){
        console.log(err)
    }
}