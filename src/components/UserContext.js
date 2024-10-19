import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [useremail,setEmail]=useState('');
  const[userphone,setPhone]=useState('');


  return (
    <UserContext.Provider value={{ username, setUsername ,useremail,setEmail,userphone,setPhone}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
