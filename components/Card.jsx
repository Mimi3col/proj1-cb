import React from "react";
import './Card.css'; 

function Card(props){
    return(
        <div className="Card">
        <img src={props.image}/>
        <h2>{props.name}</h2>
        <h3>{props.date}</h3>
        </div>
    )
}

export default Card;