export default function Stats({ items }){
    const cart = items.length;
  
    const packedItems = items.filter((item) => item.packed).length
    // items.filter((item) => item.packed) returns the objects which have been packed. 
    // the .length just counts the number of objects being returned
  
    var perPackedItems = packedItems == 0 ? 0 : Math.round((packedItems/cart)*100)
    // use round and not floor because idk why lol  
    return (
      <footer className="stats">
        <em>
          {cart === 0 ? "Start packing something!" : perPackedItems === 100 ? "You got everything! Get ready to go ✈" : `💼 You have ${cart} items on your list, and you already packed ${packedItems} item (${perPackedItems}%)` } 
          
        </em>
      </footer>
    )
  }