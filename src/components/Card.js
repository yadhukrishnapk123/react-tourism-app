import React from "react";

 function Card(props){
  
return(
<div className="card">
    <img src= {props.cardContent.imgSrc} />
   <h3>{props.cardContent.name}</h3>
   <p> {props.cardContent.phone}</p>
   <p>{props.cardContent.email}</p>
</div>
)

}



export default Card