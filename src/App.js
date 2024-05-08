import React from "react";
import Header from "./components/Header"
import Banner from "./components/Banner"
import Foter from "./components/Footer"
import Card from "./components/Card";
import cardData from "./components/cardData";
import "./style.css"


function MyApp(){
 let card = cardData.map((cardItem)=>{
  console.log(cardItem)
 return(
   <Card cardContent = {

{
  imgSrc:cardItem.imgSrc,
  name:cardItem.name,
  phone:cardItem.phone,
  email:cardItem.email,
}

   }/>
 )
});



  return(
    <div>
    <Header />
    <Banner />
    <div className="card-container">
      {card}</div>

    
    <Foter />
    
  
    </div>
 
  )
  
  }
  
export default MyApp 