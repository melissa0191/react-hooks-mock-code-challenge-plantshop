import React,{useState}from "react"; //19 delivarable 2

function NewPlantForm({Api, onHandlingSubmit}) {
  const inicialForm = { //21
    name: "",
    image: "",
    price: 0
  }
  const[formData, setFormData] = useState(inicialForm) //20
  const handleChange = (e) => { //23
    const {name,value} = e.target//29
  setFormData ({...formData, [name]: value})
  }
const handleSudmit = (e) => {
  e.preventDefault();
  

  fetch(Api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then((res) => res.json())
  .then(data => onHandlingSubmit(data))

const onHandlingSubmit = (data) =>{
  console.log(data);
}
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSudmit}> 
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        value={formData.name} //21
        onChange={handleChange}//22
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={formData.image} //24
        onChange={handleChange}//25
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={formData.price} //26
        onChange={handleChange}//27
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

