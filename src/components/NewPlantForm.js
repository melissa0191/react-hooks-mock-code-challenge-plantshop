import React,{useState}from "react";

function NewPlantForm({Api, onHandlingSubmit}) {
  const inicialForm = {
    name: "",
    image: "",
    price: 0
  }
  const[formData, setFormData] = useState(inicialForm)
  const handleChange = (e) => {
    const {name,value} = e.target
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
        value={formData.name} 
        onChange={handleChange}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={formData.image} 
        onChange={handleChange}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={formData.price} 
        onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

