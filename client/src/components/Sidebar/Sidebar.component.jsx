import React, { useState } from 'react';
import { ActiveTab, Sidebar, Tab, Tabs } from "./Sidebar.styled.jsx";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function SidebarComponent() {
    const navigate = useNavigate();
    const sideBarTabs = [
        { name: "All Tasks", path: "/tasks" },
        { name: "Add New", path: "/tasks/new" },
        { name: "Profile", path: "/user/profile" },
        { name: "Logout", path: "/" }
    ];
    const [activeTab, setActiveTab] = useState(0);

    const handleActiveTab = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const handleLogout = () => {
        Cookies.remove('access_token');
        localStorage.removeItem('persist:root');
        window.location.reload();
    };

    return (
        <Sidebar>
            {sideBarTabs.map((tab, index) => (
                <Link
                    key={index}
                    to={tab.path}
                    onClick={() => {
                        handleActiveTab(index);
                        if (tab.name === "Logout") {
                            handleLogout();
                        }
                    }}
                >
                    <Tabs>
                        {activeTab === index ? (
                            <>
                                <ActiveTab>
                                    <b>{tab.name}</b>
                                </ActiveTab>
                            </>
                        ) : (
                            <>
                                <Tab>
                                    <p>{tab.name}</p>
                                </Tab>
                            </>
                        )}
                    </Tabs>
                </Link>
            ))}
        </Sidebar>
    );
}

export default SidebarComponent;
