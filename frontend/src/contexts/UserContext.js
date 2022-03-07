import React, { createContex, useState } from 'react';

export const UserContext = createContext();

function userContext() {

    const [user, setUser] = useState('');

    
    return (
        <UserContext.Provider value={user} >

        </UserContext.Provider>
    )
}

export default UserContext;