import { useState } from "react";


export default function Form({onAddItems}) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
  
    
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if(!description) return;
      if(!quantity) return;
      // if there is no description or quantity of item, donot return anything
  
      
      const newItem = { description, quantity, packed: false, id: Date.now() };
      // console.log(newItem)  
  
      onAddItems(newItem);
  
  
      // after submission of the form, inputs should go back to their normal value
      setDescription("")
      setQuantity(1)
  
    }
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need on your trip?</h3>
        <select id="" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
          {Array.from({length: 20}, (_, i) => i+1).map(num=><option value={num} key={num}>{num}</option>)}
        </select>
        <input 
        type="text" 
        placeholder="Item..." 
        value={description} 
        onChange={(e)=>{setDescription(e.target.value)}}/>
        <button>Add</button>
      </form >
    )
  }