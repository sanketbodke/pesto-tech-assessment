import { Outlet, Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "../components/Navbar/Navbar.component.jsx";
import Sidebar from "../components/Sidebar/Sidebar.component.jsx";
import {Container, PagesContainer} from "../style/Container.styled.js";

function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.user)

    return currentUser ?
        <>
            <Navbar />
            <Container>
                <Sidebar />
                <PagesContainer>
                    <Outlet />
                </PagesContainer>
            </Container>
        </> : <Navigate to="/auth/login" />;
}

export default PrivateRoute;