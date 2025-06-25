

import { Column } from "../Column/Column";
import { statusList } from "../../data.js";
import * as S from "./Main.styled.js"

export function Main ({cards}) {
    return (
      <S.Main>
        <S.Container>
          <S.MainBlock>
            <S.MainContent>
              {statusList.map((status, i) => (
                <Column 
                    key = {i}
                    title = {status}
                    cards = {cards.filter((card) => card.status === status)}  
                             
                />
              ) 
              )}

            </S.MainContent>
          </S.MainBlock>
        </S.Container>
      </S.Main>
    );
}