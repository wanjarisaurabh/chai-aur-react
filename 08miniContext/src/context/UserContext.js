import React, { createContext, useContext } from 'react'

const UserContext = React.createContext()

export default UserContext;


export const userContexProvider = UserContext.Provider;
export const function useUser(){
    return useContext(UserContext);
}

