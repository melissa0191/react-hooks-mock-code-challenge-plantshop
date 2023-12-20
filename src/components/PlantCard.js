import React,{useState} from "react";


function PlantCard({plant}) {
  const {name, price, image} = plant;

  const [isStock, setIsStock] = useState(true);
  const handleToggleStockCount = () => {
    setIsStock(!isStock);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStock? (
        <button onClick={handleToggleStockCount}className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggleStockCount}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
