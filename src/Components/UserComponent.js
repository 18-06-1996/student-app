import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseApp } from "../core/BaseApp";
import { data } from "../Data/Data";
import { AddUser } from "./AddUser";
import { UserDetails } from "./UserDetails";

export function UserComponent( {user, setUser}){

  
const history= useHistory();

    const DeleteUser=(idx)=>{

    const alterlist = user.filter((per,id)=> per.id !== idx)
        setUser(alterlist);
    }

return(

<BaseApp
title="Users Details">
<div className="user-content">

{
user &&(

user?.map((person,idx)=>(

<div key={idx} className="user-card">
<h1> {person.name}</h1>
<p> Batch : {person.batch}</p>
<p>Email : {person.email}</p>
<p>Exp : {person.experience}</p>


<div className="btn-group">
<button
    onClick={()=>history.push(`/edit/${person.id}`)}
    className="edit-btn"> Edit</button>
    <button onClick={()=>history.push(`/user/${idx}`)}
     className="view-btn"> view</button>
    <button
    onClick={()=>DeleteUser(person.id)}
    className="del-btn"> delete</button>

</div>

</div>
)))}


   
</div>

</BaseApp>


)
}