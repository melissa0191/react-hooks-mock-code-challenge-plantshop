import React,{useState} from "react";
//child component f plant List

function PlantCard({plant}) { //14 pasta a plant as a prop so we can received the plant, we can do object destructuring 
  const {name, price, image} = plant; //15 these are the key name for the plant object

  const [isStock, setIsStock] = useState(true);
  const handleToggleStockCount = () => {
    setIsStock(!isStock);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />//16
      <h4>{name}</h4>//17
      <p>Price: {price}</p>//18
      {isStock? (
        <button onClick={handleToggleStockCount}className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggleStockCount}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
