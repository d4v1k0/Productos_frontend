import React, { useState, useEffect } from 'react'

const NgContext = React.createContext([{}, () => { }]);

const NgProvider = props => {

  // definir el state inicial
  const [auth, setAuth] = useState({
    token: '',
    auth: false
  });
  console.log('context', auth)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({
        token,
        auth: true,
      });
    }

  }, [setAuth]);


  return (
    <NgContext.Provider value={[auth, setAuth]}>
      {props.children}
    </NgContext.Provider>
  );
}

export { NgContext, NgProvider }