
import { Card } from "../Card/Card";

export function Column ({title, cards }) {
    return (
        <div className="main__column column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        <div className="cards">
       {cards.map( (card) => {
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