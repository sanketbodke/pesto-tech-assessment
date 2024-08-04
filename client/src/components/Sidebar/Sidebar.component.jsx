import React, { useState } from 'react';
import {ActiveTab, Sidebar, Tab, Tabs} from "./Sidebar.styled.jsx";
import { Link } from "react-router-dom";

function SidebarComponent() {
    const sideBarTabs = [
        { name: "All Tasks", path: "/task/all" },
        { name: "Add New", path: "/task/new" },
        { name: "Profile", path: "/user/profile" },
        { name: "Logout", path: "/" }
    ];
    const [activeTab, setActiveTab] = useState(null);

    const handleActiveTab = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <Sidebar>
            {sideBarTabs.map((tab, index) => (
                <Link
                    key={index}
                    to={tab.path}
                    onClick={() => handleActiveTab(index)}
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
