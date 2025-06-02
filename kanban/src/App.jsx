import { useState } from "react";


import "./App.css";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { PopNewCard } from "./components/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/PopBrowse/PopBrowse";
import { PopExit } from "./components/PopUps/PopUps";

function App() {
  const [count, setCount] = useState(0);

  return (
  <div className="wrapper">
    {/* pop-up start*/}
    <PopExit />
    <PopNewCard />
    <PopBrowse />
    {/* pop-up end*/}
    
    <Header />


    <Main />


  </div>
  
  );
}

export default App;
