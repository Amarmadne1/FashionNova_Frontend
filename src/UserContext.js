import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
const [ isLoggedIn , setIsLoggedIn] = useState(null);
const [show,setShow]=useState(true);
const [searchResults, setSearchResults] = useState([]);
const [recommendedResults, setRecommendedResults] = useState([]);
const [searchText, setSearchText] = useState('');
return (
<UserContext.Provider value={{ isLoggedIn, setIsLoggedIn,show,setShow,searchResults, setSearchResults,recommendedResults, setRecommendedResults,searchText, setSearchText }}>
{children}
</UserContext.Provider>
);
};