import React,{useState} from "react";
import Header from "./components/Header"
import Banner from "./components/Banner"
import Foter from "./components/Footer"
import Card from "./components/Card";
import cardData from "./components/cardData";


import "./style.css"




//ge the favaratae images



function MyApp(){
 
  let [favImges,setFavImages] = useState("")

  function getFavImges(imgSrc){
   setFavImages(favImges = imgSrc)

  
  }
  




 let card = cardData.map((cardItem)=>{
 
 return(
   <Card cardContent = {

{
  imgSrc:cardItem.imgSrc,
  name:cardItem.name,
  phone:cardItem.phone,
  
}}
   
getFavImges = {
   getFavImges
   }
   />
 )
});



  return(
    <div>
    <Header />
    <Banner />
    <div className="card-container">
      {card}
  
      </div>


  
    <Foter />
    
  
    </div>
 
  )
  
  }
  
export default MyApp 