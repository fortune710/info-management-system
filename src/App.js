import { Route, Routes } from 'react-router-dom';
import ForgotPasswordPage from './pages/ForgotPassword';
import MainAreaPage from './pages/Main';
import SignInPage from './pages/SignIn';

function App() {
  return (
    <Routes>
      <Route index element={<SignInPage/>} />
      <Route exact path='/login' element={<SignInPage/>} />
      <Route exact path='/main' element={<MainAreaPage/>} />
      <Route exact path='/forgot-password' element={<ForgotPasswordPage/>} />
    </Routes>
  );
}

export default App;
