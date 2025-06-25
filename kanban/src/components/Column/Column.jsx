
import { Card } from "../Card/Card";
import * as S from "./Column.styled.js"

export function Column ({title, cards }) {
    return (
        <S.MainColumn>
        <S.ColumnTitle>
          <p>{title}</p>
        </S.ColumnTitle>
        <S.Cards>
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
       

        
        </S.Cards>
      </S.MainColumn>
    );
}