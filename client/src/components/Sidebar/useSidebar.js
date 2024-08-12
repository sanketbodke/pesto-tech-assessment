import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const useSidebar = () => {
    const location = useLocation();

    const sideBarTabs = [
        { name: "All Tasks", path: "/tasks" },
        { name: "Add New", path: "/tasks/new" },
        { name: "Profile", path: "/user/profile" },
        { name: "Logout", path: "/" }
    ];

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const activeIndex = sideBarTabs.findIndex(tab => tab.path === location.pathname);
        if (activeIndex !== -1) {
            setActiveTab(activeIndex);
        }
    }, [location.pathname]);

    const handleLogout = () => {
        Cookies.remove('access_token');
        localStorage.removeItem('persist:root');
        window.location.reload();
    };

    return {
        sideBarTabs,
        activeTab,
        handleLogout
    }
}

export default useSidebar;