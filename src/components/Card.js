import React ,{useState}from "react";


 function Card(props){
  let Favarates = useState("Add to Favarate")
  let activeClass = useState("")


let [btnTextState,setBtnTextState] = Favarates;
let [classState,setClassState] = activeClass


function AddToFavarate (imgSrc){
    setBtnTextState((prevState)=>{
        if(prevState === "Add To Favorite"){
       props.getFavImges (imgSrc)
            return "Add To Favorite"
        }else{
          
            return "Add To Favorite"
        }
    })
    setClassState((prevClass)=>{
        if(prevClass ===""){
          return "active"
        }else{
            return ""
        }
    })
}



return(
<div className = {`card ${classState}`}>
 
    <img src= {props.cardContent.imgSrc} />

   <h3>{props.cardContent.name}</h3>
   <p> {props.cardContent.phone}</p>
    <button onClick={(()=>{
        AddToFavarate(props.cardContent.imgSrc)
    })} 
       className="favorite-button">{  btnTextState}</button>
</div>
)

 }



export default Card