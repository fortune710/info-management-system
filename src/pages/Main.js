import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import HomePage from "./main-pages/Home"
import InventoryPage from "./main-pages/Inventory";
import { IoHome, IoPeople, IoLibrary, IoSettings } from "react-icons/io5";

import './main.styles.scss';

const MainAreaPage = () => {
    const screenWidth = window.innerWidth
    return(
        <div className="main-area-content">
            <SideMenu />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/inventory" element={<InventoryPage/>} />
                <Route path="/staff" element={undefined} />
                <Route path="/settings" />
            </Routes>
            

        </div>

    )
}


const SideMenu = () => {
    const location = useLocation();
    const router = useNavigate();

    const MENU_ITEMS = [
        {
            name: 'Home',
            icon: <IoHome/>
        },
        {
            name: 'Inventory',
            icon: <IoPeople/>
        },
        {
            name: 'Staff',
            icon: <IoLibrary/>
        },
        {
            name: 'Settings',
            icon: <IoSettings/>
        }
    ]

    return(
        <div className="side-menu">
            <ul className="menu-list">
                {
                    MENU_ITEMS.map(({ name, icon }) => (
                        <li 
                            onClick={() => router(`/${name.toLowerCase()}`)}
                            className={`menu-list-item ${location.pathname === name.toLowerCase() ? 'active' : ''}`}>
                            <span>
                                { icon }
                            </span>
                            <h4>{name}</h4>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default MainAreaPage;