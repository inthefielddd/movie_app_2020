import React from 'react';
import ProTypes from "prop-types";

const foodILike = [
  {
  id:1,
  name: "kimchi",
  image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tY7yWP7-KjRrTilhGr6ZggHaE9%26pid%3DApi&f=1",
  rating:4.8
  },
  {
    id:2,
    name: "coffee",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EeezjupWTmgz2Gj2WTOk9AHaE8%26pid%3DApi&f=1",
    rating:4.3
  },
  {
    id:3,
    name: "bread",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tyUBCGlS3V0KPGFbpx0EdQHaKZ%26pid%3DApi&f=1",
    rating:4.5
  },
  {
    id:4,
    name: "pasta",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-jsXBzcMVliiY6vHmiDGJQHaJ4%26pid%3DApi&f=1",
    rating:4.9
  },
]


function Food({name, picture, rating}){
  return (
    <div>
      <img src={picture} alt={name}/>
      <h2>  I LIKE {name} </h2>
      <h4>{rating}/5.0</h4>
  </div>
  )
}

Food.prototype = {
  name : ProTypes.string.isRequired,
  picture:ProTypes.string.isRequired,
  rating:ProTypes.number

}

function App() {
  return <div>
  {foodILike.map(dish => (
    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
  ))}
    </div>
}

export default App;
