import { useLocation, useNavigate, Outlet } from "react-router-dom"
import { IoHome, IoPeople, IoLibrary, IoSettings, IoLogOut, IoExpand } from "react-icons/io5";



import './main.styles.scss';
import { useId, useState } from "react";

const MainAreaPage = () => {
    const screenWidth = window.innerWidth
    return(
        <div className="main-area-content">
            <SideMenu />
            <Outlet/>
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
            icon: <IoHome/>
        },
        {
            id: useId(),
            name: 'Inventory',
            icon: <IoLibrary/>
        },
        {
            name: 'Staff',
            icon: <IoPeople/>
        },
        {
            id: useId(),
            name: 'Settings',
            icon: <IoSettings/>
        }
    ]

    if(closed){
        return(
            <div className="side-menu closed-menu">
                <ul className="menu-list">
                {
                    MENU_ITEMS.map(({ id, name, icon }) => (
                        <li key={id}
                            onClick={() => router(`/dashboard/${name.toLowerCase()}` ,{})}
                            className={`menu-list-item-closed ${location.pathname === '/dashboard/'+name.toLowerCase() ? 'active' : 'not-active'}`}>
                            <span>
                                { icon }
                            </span>
                        </li>
                    ))
                }

                <li className="menu-list-item-closed expand-menu" onClick={() => setClosed(false)}>
                    <IoExpand/>
                </li>
                <li className="menu-list-item-closed log-out">
                    <IoLogOut/>
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
                                <span>
                                    { icon }
                                </span>
                                <h4>{name}</h4>
                            </li>
                        ))
                    }

                    <button onClick={() => setClosed(true)}>close</button>
                    <li className="menu-list-item log-out">
                        <span>
                            <IoLogOut/>
                        </span>
                        <h4>Log Out</h4>
                    </li>
                </ul>
            </div>
        )
    }

}

export default MainAreaPage;