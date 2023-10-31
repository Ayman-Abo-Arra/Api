import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pizzaid = () => {
    const [productId,setProductsId] = useState()
    useEffect(() => {
        axios.get('https://forkify-api.herokuapp.com/api/get?rId=47746').then( res => setProductsId(res.data))
    }, [])
    console.log(productId);
  return (
<div class="col-md-5">
          {/* <div class="resturant pt-4">
            <h2>${productId.recipe.title}</h2>
            <img src="{resul.recipe.image_url}" class="img-fluid"/>
            <p class="pt-3"> The integredients is : </p>
            <p class="pt-1">{productId.recipe.ingredients} </p>
            <p> The publisher is :  {productId.recipe.publisher}</p>
           
            <a href="{resul.recipe.source_url}" > {productId.recipe.source_url}</a>
            <a href="{resul.recipe.publisher_url}" >{productId.recipe.publisher_url}</a>

          </div> */}
        </div> )
}

export default Pizzaid