import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) { //9

  console.log(plants); //10
  const plantCard = plants.map((plant) =>{ //11
    return <PlantCard key={plant.id} plant={plant} />
  })
  return (
    <ul className="cards">{plantCard}</ul> //13 wheere the card will be rendered
  );
}

export default PlantList;
