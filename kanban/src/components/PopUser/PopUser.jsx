import * as S from "./popUser.styled.js"

export function PopUser ({changeTheme, setChangeTheme}) {

  const onChangeTheme = () => {
    setChangeTheme(changeTheme === "light" ?"dark":"light")
  }

    return (
        <S.HeaderPopUserSet 
        // pop-user-set"
        id="user-set-target"
      >
        {/* <a href="">x</a> */}
        <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
        <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
        <S.PopUserSetTheme>
          <p>Темная тема</p>
          <input checked = {changeTheme === "dark"} 
                  onClick={onChangeTheme}
                  type="checkbox" name="checkbox" />
        </S.PopUserSetTheme>
        <S.ButtonPopUserExit type="button">
          <a href="#popExit">Выйти</a>
        </S.ButtonPopUserExit>
      </S.HeaderPopUserSet>
    );
}