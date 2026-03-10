import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";
import "./index.css"
// import MyComponent from "./components/MyComponent";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Logo />
      <Form setItems={ setItems }/>
      <PackingList items={ items }/>
      <Footer items={ items }/>
    </div>
  );
}

export default App;