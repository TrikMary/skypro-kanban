import { PopUser } from "../PopUser/PopUser";
import { useState } from "react";


export function Header ({ addCard }) {

// Создаем состояние изначально закрытого окошка
  const [isOpen, setIsOpen] = useState(false)
  // Функция по смене состояния на противоположное
  const toogleOpenUser = () => {
    setIsOpen (prev => !prev)
  
    }

    return (
        <header className="header">
        <div className="container">
          <div className="header__block">
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
            </div>
            <nav className="header__nav">
              {/* добавляем функциюю добавления карточки на кнопку */}
              <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={addCard}>
              <p>Создать новую задачу</p>
                {/* <a href="#popNewCard">Создать новую задачу</a> */}
              </button>
              <div className="header__user _hover02 pop_user_focus" onClick={toogleOpenUser}>
                Ivan Ivanov
              </div>
              {/* Что будет если открыть окошко */}
              {isOpen && <PopUser />}

            </nav>
          </div>
        </div>
      </header>
    );
}