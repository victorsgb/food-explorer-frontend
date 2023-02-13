// Core dependencies
import { Routes, Route } from 'react-router-dom';

// Custom pages
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';

export function AuthRoutes(): JSX.Element {
  return (
    <Routes>
      <Route key='001' path='/' element={<SignIn />} />
      <Route key='002' path='/sign-up' element={<SignUp />} />
      <Route key='999' path='*' element={<NotFound />} />
    </Routes>
  );
}