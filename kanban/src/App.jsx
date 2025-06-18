import { useState } from "react";
import { useEffect } from "react";


import "./App.css";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { PopNewCard } from "./components/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/PopBrowse/PopBrowse";
import { PopExit } from "./components/PopExit/PopExit.jsx";
import { cardList } from "./data.js";
import { GlobalStyle, Wrapper } from "./globalStyle.styled.js";

function App() {
// { Добавляем состояние нашего списка }
  const [cards, setCards] = useState(cardList)

  // Создаем функцию по добавлению

  const addCard = () => {
    const newCard = {
      id: cards.lenght+1,
      date: "02.06.25",
      topic: "Web Design",
      title: "Новая задача",
      status: "Без статуса",
    }
  
        // Вызываем состояние, разбираем массив, добавляем карточку, собираем назад

        setCards ([...cards, newCard])
  }

  // Создаем имитацию загрузки
const [loading, setLoading] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 3000);
}, [loading]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        
        {/* имитация загрузки */}

        

        <Header addCard={addCard}/>

        {/* Передаем новый список карточек */}
        {loading ? <div className="page_loader">Данные загружаются...</div> :
        <Main cards={cards}/> }
      


      </Wrapper>
      {/* </GlobalStyle> */}
    </>
  );
}

export default App;
