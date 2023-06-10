import React, { useState, createContext, useContext } from 'react';

const LoginPageContext = createContext();

function LoginPageContextProvider({ children }) {
  const [disabled, setDisabled] = useState(true);
  const [isEmpty, setIsEmpty] = useState('');
  const [anim, setAnim] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCse, setUpperCase] = useState(false);
  return (
    <LoginPageContext.Provider value={{
      disabled,
      setDisabled,
      isEmpty,
      setIsEmpty,
      anim,
      setAnim,
      success,
      setSuccess,
      validLength,
      setValidLength,
      lowerCase,
      setLowerCase,
      upperCse,
      setUpperCase,
    }}
    >
      {children}
    </LoginPageContext.Provider>
  );
}

export default LoginPageContextProvider;
export const loginPageContext = () => useContext(LoginPageContext);
