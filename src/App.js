import Child1 from "./components/Child1";
import './App.css';
import { useState } from "react";

function App() {
  const [pen , setPen] = useState("abhinav");
  return (
    <div className="App">
     <Child1 childOne={pen}/>
    </div>
  );
}

export default App;
