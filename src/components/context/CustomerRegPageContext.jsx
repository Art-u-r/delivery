import React, { useState, createContext, useContext } from 'react';

const CustomerRegPageContext = createContext();

function CustomerRegPageContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isEmpty, setIsEmpty] = useState('');
  const [confirm, setConfirm] = useState('');
  const [anim, setAnim] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [num, setNum] = useState(false);
  return (
    <CustomerRegPageContext.Provider value={{
      isModalOpen,
      setIsModalOpen,
      disabled,
      setDisabled,
      isEmpty,
      setIsEmpty,
      confirm,
      setConfirm,
      anim,
      setAnim,
      success,
      setSuccess,
      validLength,
      setValidLength,
      lowerCase,
      setLowerCase,
      upperCase,
      setUpperCase,
      symbol,
      setSymbol,
      num,
      setNum,
    }}
    >
      {children}
    </CustomerRegPageContext.Provider>
  );
}

export default CustomerRegPageContextProvider;
export const regPageContext = () => useContext(CustomerRegPageContext);
