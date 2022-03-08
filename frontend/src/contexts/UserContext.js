import React, { createContext, Component, useState } from 'react';

export const UserContext = createContext();

function UserContextProvider(props) {

    const [user, setUser] = useState({ 
        isLoggedIn: false,
        token: null,
        }

    );

    
    return (
        <UserContext.Provider value={user} >
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;