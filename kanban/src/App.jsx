import { useState } from "react";


import "./App.css";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { PopNewCard } from "./components/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/PopBrowse/PopBrowse";
import { PopExit } from "./components/PopUps/PopUps";
import { cardList } from "./data.js";

function App() {
  const [cards, setCards] = useState(cardList)


  return (
  <div className="wrapper">
    {/* pop-up start*/}
    <PopExit />
    <PopNewCard />
    <PopBrowse />
    {/* pop-up end*/}
    
    <Header />


    <Main cards={cards}/>


  </div>
  
  );
}

export default App;
