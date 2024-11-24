import React, { useState } from 'react'

function Pages() {
const [products, setProducts] = useState("");

    const fetchdata = async () =>{
const response = await fetch("http://dummyjson.com/products?limit=10&skip=${page * 10 - 10}")
const data = await response.json();
console.log(data)



    }

  return (
    <div className="products">
{
    products.length > 0 && <div className="products">
        {
products.map((prod) =>{
    return <span className="products__single" key={prod.id}>
        <img src={prod.thumbnail} alt={prod.title} /> 
        <span>{prod.title}</span>

    </span>
})
}
    </div>
}
{
    
}
    </div>
  )
}

export default Pages