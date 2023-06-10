import React, { useState, createContext, useContext } from 'react';

const MainPageContext = createContext();

function MainPageContextProvider({ children, orders }) {
  const [allOrders, setAllOrders] = useState(orders);
  const [inpSearch, setInpSearch] = useState('');
  const [searchFood, setSearchFood] = useState([]);
  return (
    <MainPageContext.Provider value={{
      allOrders,
      setAllOrders,
      inpSearch,
      setInpSearch,
      searchFood,
      setSearchFood,
    }}
    >
      {children}
    </MainPageContext.Provider>
  );
}

export default MainPageContextProvider;
export const mPageContext = () => useContext(MainPageContext);
