import React from "react";
 export default function Compo(props) {
    return(
        <>
       <h2>{props.name}</h2>
       <h3 className="username">xxx{props.username}</h3>
       <h3 className="email">{props.email}</h3>
       <h3 className="addre">{props.addres}</h3>
       <h3 className="phone">{props.phone}</h3>
       <h3 className="website">{props.website}</h3>
       <div>


        
       </div>
        </>
    )
 }