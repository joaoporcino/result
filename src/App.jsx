import React, { useState } from 'react';
import { AuthProvider } from './context/AuthProvider/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout/index';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile"> 
            <ProtectedLayout>
              
            </ProtectedLayout>
          </Route>

          <Route path="/login">

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>  
  );
}

export default App;
