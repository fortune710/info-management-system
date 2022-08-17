import { useLocation, useNavigate, Outlet } from "react-router-dom"
import { IoExpand, IoContract } from "react-icons/io5";

import { Logout, Home, Settings, People, Inventory } from "@mui/icons-material";


import './main.styles.scss';
import { useId, useState } from "react";
import Header from "../../components/Header/Header";

const MainAreaPage = () => {
    const screenWidth = window.innerWidth
    return(
        <div className="main-area-content">
            <SideMenu />
            <div className="dashboard-content">
                <Header/>
                <Outlet/>
            </div>
        </div>

    )
}


const SideMenu = () => {
    const location = useLocation();
    const router = useNavigate();

    const [closed, setClosed] = useState(false);

    const MENU_ITEMS = [
        {   
            id: useId(),
            name: 'Home',
            icon: <Home/>
        },
        {
            id: useId(),
            name: 'Inventory',
            icon: <Inventory/>
        },
        {
            name: 'Staff',
            icon: <People/>
        },
        {
            id: useId(),
            name: 'Settings',
            icon: <Settings/>
        }
    ]

    if(closed){
        return(
            <div className="side-menu closed-menu">
                <ul className="menu-list">
                    {
                        MENU_ITEMS.map(({ id, name, icon }) => (
                            <li 
                                key={id}
                                onClick={() => router(`/dashboard/${name.toLowerCase()}` ,{})}
                                className={`menu-list-item-closed ${location.pathname === '/dashboard/'+name.toLowerCase() ? 'active' : 'not-active'}`}>
                                { icon }
                            </li>
                        ))
                    }

                    <li className="menu-list-item-closed expand-menu" onClick={() => setClosed(false)}>
                        <IoExpand/>
                    </li>
                    <li className="menu-list-item-closed log-out">
                        <Logout/>
                    </li>
                </ul>
            </div>
        )
    } else {

        return(
            
            <div className="side-menu opened-menu">
                <ul className="menu-list">
                    {
                        MENU_ITEMS.map(({ id, name, icon }) => (
                            <li key={id}
                                onClick={() => router(`/dashboard/${name.toLowerCase()}` ,{})}
                                className={`menu-list-item ${location.pathname === '/dashboard/'+name.toLowerCase() ? 'active' : 'not-active'}`}>
                                { icon }
                                
                                <h4>{name}</h4>
                            </li>
                        ))
                    }

                    <li
                        onClick={() => setClosed(true)}
                        className="menu-list-item contrast-menu"
                    >
                        <IoContract/>
                        <h4>Contrast Menu</h4>
                    </li>
                    <li className="menu-list-item log-out">
                        <Logout/>
                        <h4>Log Out</h4>
                    </li>
                </ul>
            </div>
        )
    }

}

export default MainAreaPage;