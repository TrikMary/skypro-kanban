import { cardList } from "../../data.js";
import { Card } from "../Card/Card";

export function Column () {
    return (
        <div className="main__column column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
        <div className="cards">
       {cardList.map( (card) => {
        return (
          <Card 
            key = {card.id}
            title = {card.title}
            topic = {card.topic}
            date = {card.date}
          />
        )
       })}
       

        
        </div>
      </div>
    );
}