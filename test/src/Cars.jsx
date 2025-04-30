import React, { useEffect, useState } from "react";


function Cars() {
const [cars,setcars]= useState([])
 
useEffect(()=>{
fetch("/carsss.json")
.then((resr)=> resr.json())
.then((data)=> setcars(data))

},[])


  return (
    <>
    
    
    </>
  );
}

export default Cars;