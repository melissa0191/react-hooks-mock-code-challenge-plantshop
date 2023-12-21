import React,{ useState,useEffect } from "react"; //1 we use the state here because we gonna be passing the plant as a prop to the plant list, we gonna grab the data in the search imput
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const Api = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]); //2, incial value will be an empty array
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {//3 first argument call back function, second argument dependancy array
    fetch(Api) //4
    .then((res) => res.json())//5

    .then(setPlants)//6
  }, []);
console.log(plants);//7
  const onHandlingSubmit = (newPlant) =>{
    setPlants([...plants, newPlant])
  }
  const onHandleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };
  console.log(searchTerm);
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <main>
      <NewPlantForm  Api={Api} onHandlingSubmit=
      {onHandlingSubmit}/>
      <Search  
      searchTerm={searchTerm}
      onHandleSearch={onHandleSearch}
      />
      <PlantList  plants ={displayedPlants}/> //8sending the plant as a prop
    </main>
  );
}

export default PlantPage;
