import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SignIn } from './features/sign-in/SignIn';
import { SignUp } from './features/sign-up/SignUp';
import { NotFound } from './components/NotFound';
import { EmailVerification } from './features/email-verification/EmailVerification';

/**
 * Creates the react application.
 * @returns {JSX.Element} A react component.
 */
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<SignIn />} />
          <Route path='/email-verification' element={<EmailVerification />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
