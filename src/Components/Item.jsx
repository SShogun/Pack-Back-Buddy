import './Item.css'

export default function Item({ item, onDeleteItems, onToggleItems }) {
    return (
      <div id="items">
        <li><input type="checkbox" onChange={() => onToggleItems(item.id)}/><span style={item.packed ? {textDecoration: "line-through"} : {textDecoration: "none"} }>{item.quantity} {item.description}</span>
        <button onClick={() => {onDeleteItems(item.id)}}>❌</button></li>
        {/* you need to pass the id of the item */}
      </div>
    )
  }