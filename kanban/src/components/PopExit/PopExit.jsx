
import * as S from "./popExit.styled.js"

export function PopExit () {
    return (
        <S.PopExit id="popExit">
        <S.PopExitContainer>
          <S.PopExitBlock>
            <S.PopExitTitle>
              <h2>Выйти из аккаунта?</h2>
            </S.PopExitTitle>
            <S.PopExitForm id="formExit" action="#">
              <S.PopExitFormGroup>
                <S.ButtonPopExitYes id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </S.ButtonPopExitYes>
                <S.ButtonPopExitNo id="exitNo">
                  <a href="main.html">Нет, остаться</a>{" "}
                </S.ButtonPopExitNo>
              </S.PopExitFormGroup>
            </S.PopExitForm>
          </S.PopExitBlock>
        </S.PopExitContainer>
      </S.PopExit>
    );
}