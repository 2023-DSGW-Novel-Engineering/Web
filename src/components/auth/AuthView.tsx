import React, { useState } from "react";
import * as S from "../../styles/auth/AuthForm.style";
import SignIn from "./signIn/SignIn";
import SignUp from "./signup/SignUp";

const AuthView = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.Slogan></S.Slogan>
        <S.AuthArea>
          <S.AuthForm>
            {isSignUp ? (
              <SignUp setIsSignUp={setIsSignUp} />
            ) : (
              <SignIn setIsSignUp={setIsSignUp} />
            )}
          </S.AuthForm>
        </S.AuthArea>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default AuthView;
