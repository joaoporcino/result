import React from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { Outlet } from 'react-router-dom';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    
    const auth = useAuth();

    if (!auth.email) {
        return (<div><h1>Você não tem acesso</h1> <Outlet /> </div>);
    }

    return children;
};