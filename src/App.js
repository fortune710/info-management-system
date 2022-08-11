import { Route, Routes } from 'react-router-dom';
import ForgotPasswordPage from './pages/ForgotPassword';
import MainAreaPage from './pages/Dashboard/Main';
import SignInPage from './pages/SignIn/SignIn';

import HomePage from "./pages/main-pages/Home"
import InventoryPage from "./pages/main-pages/Inventory";
import StaffPage from "./pages/main-pages/StaffPage/Staff";
import SettingsPage from "./pages/main-pages/Settings";

import "./theme/variables.scss";

function App() {
  return (
    <Routes>
      <Route index element={<SignInPage/>} />
      <Route exact path='/login' element={<SignInPage/>} />
      <Route exact path='/dashboard' element={<MainAreaPage/>}>
        <Route path="home" element={<HomePage/>} />
        <Route path="inventory" element={<InventoryPage/>} />
        <Route path="staff" element={<StaffPage/>} />
        <Route path="settings" element={<SettingsPage/>} />
      </Route>
      <Route exact path='/forgot-password' element={<ForgotPasswordPage/>} />
    </Routes>
  );
}

export default App;
