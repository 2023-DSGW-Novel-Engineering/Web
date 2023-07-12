import React, { useState } from "react";
import SignIn from "./signIn/SignIn";
import SignUp from "./signup/SignUp";

const AuthView = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  return (
    <nav>
      <div>
        <nav></nav>
        <nav>
          {isSignUp ? (
            <SignUp setIsSignUp={setIsSignUp} />
          ) : (
            <SignIn setIsSignUp={setIsSignUp} />
          )}
        </nav>
      </div>
    </nav>
  );
};

export default AuthView;
