import React, { createContext, useContext, useState } from 'react';

const VendorContext = createContext();

export const VendorProvider = ({ children }) => {
  const [id,setId]=useState('');
  const [fname, setvendorName] = useState('');
  const [lname, setvendorNamee] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmailV] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPasswordV] = useState('');
  const [state, setState] = useState('');


  return (
    <VendorContext.Provider value={{ fname, setvendorName ,lname,setvendorNamee ,
        company,setCompany,category,setCategory,
        email,setEmailV,phone,setPhone,
        password,setPasswordV,state,setState,id,setId

    }}>
      {children}
    </VendorContext.Provider>
  );
};

export const useVendor = () => useContext(VendorContext);
