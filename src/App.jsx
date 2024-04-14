import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";


export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItems(id) {
    setItems(items => items.filter((i) => i.id!== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map((item) => item.id === id ? {...item, packed:!item.packed} : item))
  }

  function clearItems() {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    confirmed ? setItems([]) : null
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItem} onClearItems={clearItems}/>
      <Stats items={items}/>
    
    </div>
  )
}