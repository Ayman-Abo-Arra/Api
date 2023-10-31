import React, { useEffect, useState } from 'react'

function Piza() {

    
    let [piza,setPiza]=useState([]);
   const getPiza = async ()=>{
      let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
      let result = await response.json();
      setPiza(result.recipes);
    }
    useEffect(()=>{ 
      getPiza();}
    ,[] )




  return (
    <>
    

    <div className='row'>
    {
     piza.map( (ele)=>{
     return <div className='col-md-3' key={ele.id}>
         <h2>{ele.title}</h2>
         <img src={ele.image_url}  className="img-fluid h-50"/>
         <a href="index.html?id={ele.recipe_id}" className="text-black pt-3">Read more</a>

     </div>    
     }
     )
    } 
     
     
      </div>
    </>
  )
}
   


export default Piza