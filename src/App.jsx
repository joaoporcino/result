import React, { useState } from 'react';
import { AuthProvider } from './context/AuthProvider/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout/index';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/profile" > 
            <ProtectedLayout>

            </ProtectedLayout>
          </Route>

          <Route path="/login">

          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>  
  );
}

export default App;
