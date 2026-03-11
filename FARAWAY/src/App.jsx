import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";
import "./index.css"
// import MyComponent from "./components/MyComponent";

function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => (
      item.id === id ? {...item, packed: !item.packed}
      : item
    )))
  }

  return (
    <div className="App">
      <Logo />
      <Form setItems={ setItems }/>
      <PackingList items={ items } onDeleteItem = { handleDeleteItem } handleToggleItem = { handleToggleItem } setItems = { setItems }/>
      <Footer items={ items }/>
    </div>
  );
}

export default App;