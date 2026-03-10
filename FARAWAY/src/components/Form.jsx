import { useState } from "react";

function Form({ setItems }) {
   const [description, setDescription] = useState("");
   const [quantity, setQuantity] = useState(1);

   function handleAddItems(item) {
      setItems(prev => [...prev, item]);
   }

   function handleSubmit(fromData) {
      const newItem = {
         ...Object.fromEntries(fromData),
         packed: false,
         id: Date.now()
      };

      handleAddItems(newItem)

      setQuantity(1);
      setDescription("");
   }
   return (
      <div className="tripForm">
         <p>What do you need for your 😍 trip?</p>
         <form 
            className="form" 
            action={ handleSubmit }
            >
            <select 
               className="number" 
               name="quantity"
               value={ quantity }
               onChange={ (e) => setQuantity(Number(e.target.value)) }
               >
               {
                  Array.from({ length: 20 }, (_, i) => i+1)    .map(num => (
                     <option value={num} key={num}>{num}</option>
                  ))
               }
            </select> 

            <input 
               type="text" 
               placeholder="Item..." 
               name="description" 
               value={ description }
               onChange={ (e) => setDescription(e.target.value) }
               required
            />
            <button>ADD</button>
         </form>
      </div>   
   );
}

export default Form;