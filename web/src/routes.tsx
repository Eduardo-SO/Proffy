import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/landing" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
