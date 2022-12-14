import { Route, Routes } from 'react-router-dom';
import ForgotPasswordPage from './pages/ForgotPassword';
import MainAreaPage from './pages/Dashboard/Main';
import SignInPage from './pages/SignIn/SignIn';

import HomePage from "./pages/main-pages/Home/Home"
import InventoryPage from "./pages/main-pages/Inventory/Inventory";
import StaffPage from "./pages/main-pages/StaffPage/Staff";
import SettingsPage from "./pages/main-pages/Settings";

import AddStaffPage from './pages/main-pages/StaffPage/AddStaff';
import AllStaffPage from './pages/main-pages/StaffPage/AllStaff';

import "./theme/variables.scss";
import './App.scss';

function App() {
  return (
    <Routes>
      <Route index element={<SignInPage/>} />
      <Route exact path='/login' element={<SignInPage/>} />
      <Route exact path='/dashboard' element={<MainAreaPage/>}>
        <Route path="home" element={<HomePage/>} />
        <Route path="inventory" element={<InventoryPage/>} />
        <Route path="staff" element={<StaffPage/>} />
        <Route path='add-staff' element={<AddStaffPage/>} />
        <Route path="all-staff" element={<AllStaffPage/>} />
        <Route path="settings" element={<SettingsPage/>} />
      </Route>
      <Route exact path='/forgot-password' element={<ForgotPasswordPage/>} />
    </Routes>
  );
}

export default App;
