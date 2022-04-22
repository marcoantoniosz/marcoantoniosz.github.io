import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [menuOn, setMenu] = useState(false);
  const contextValue = {
    menuOn,
    setMenu,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;