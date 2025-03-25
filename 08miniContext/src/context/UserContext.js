import React, { createContext, useContext } from 'react'

const UserContext = React.createContext()

export default UserContext;

export function useUser(){
    return useContext(UserContext);
}

