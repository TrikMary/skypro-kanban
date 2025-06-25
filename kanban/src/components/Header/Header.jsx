import { PopUser } from "../PopUser/PopUser";
import { useState } from "react";

import * as S from "./Header.styled.js"


export function Header ({ addCard, changeTheme, setChangeTheme }) {

// Создаем состояние изначально закрытого окошка
  const [isOpen, setIsOpen] = useState(false)
  // Функция по смене состояния на противоположное
  const toogleOpenUser = () => {
    setIsOpen (prev => !prev)
  
    }

    return (
        <S.Header>
        <S.Container>
          <S.HeaderBlock>
            <S.HeaderLogoLight>
              <a href="" target="_self">
                <img src="images/logo.png" alt="logo" />
              </a>
            </S.HeaderLogoLight>
            <S.HeaderLogoDark>
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
            </S.HeaderLogoDark>
            <S.HeaderNav className="header__nav">
              {/* добавляем функциюю добавления карточки на кнопку */}
              <S.HeaderBtnMainNew id="btnMainNew" onClick={addCard}>
              <p>Создать новую задачу</p>
                {/* <a href="#popNewCard">Создать новую задачу</a> */}
              </S.HeaderBtnMainNew>
              <S.HeaderUserBtn onClick={toogleOpenUser}>
                Ivan Ivanov
              </S.HeaderUserBtn>
              {/* Что будет если открыть окошко */}
              {isOpen && <PopUser setChangeTheme = {setChangeTheme}
                  changeTheme = {changeTheme} />}

            </S.HeaderNav>
          </S.HeaderBlock>
        </S.Container>
      </S.Header>
    );
}