import React, { createContext, Component, useState } from 'react';

export const UserContext = createContext();

function UserContextProvider(props) {

    const [user, setUser] = useState({ 
        isLoggedIn: false,
        token: null,
        }

    );

    let updateUser = () => {
        setUser({isLoggedIn: true});
    }

    return (
        <UserContext.Provider value={user, updateUser=updateUser } >
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;