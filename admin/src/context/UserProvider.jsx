import { createContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext({logged: false});

// Create a UserProvider component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    // Define any functions or state variables related to user here

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };