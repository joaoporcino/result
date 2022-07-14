import React from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    
    const auth = useAuth();

    if (!auth.email) {
        return (<div><h1>Você não tem acesso</h1> </div>);
    }

    return children;
};