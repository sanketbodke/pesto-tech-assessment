import { ActiveTab, Sidebar, Tab, Tabs } from "./Sidebar.styled.jsx";
import { Link } from "react-router-dom";
import useSidebar from "./useSidebar.js";

function SidebarComponent() {
    const {
        sideBarTabs,
        activeTab,
        handleLogout
    } = useSidebar()

    return (
        <Sidebar>
            {sideBarTabs.map((tab, index) => (
                <Link
                    key={index}
                    to={tab.path}
                    onClick={() => {
                        if (tab.name === "Logout") {
                            handleLogout();
                        }
                    }}
                >
                    <Tabs>
                        {activeTab === index ? (
                            <ActiveTab>
                                <b>{tab.name}</b>
                            </ActiveTab>
                        ) : (
                            <Tab>
                                <p>{tab.name}</p>
                            </Tab>
                        )}
                    </Tabs>
                </Link>
            ))}
        </Sidebar>
    );
}

export default SidebarComponent;