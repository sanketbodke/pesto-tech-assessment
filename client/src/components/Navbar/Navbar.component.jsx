import React from 'react';
import { Nav, Title, UserName } from "./Navbar.styled.jsx"
import useNavbar from "./useNavbar.js";
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

function NavbarComponent() {
    const {
        userName
    } = useNavbar()
    return (
        <Nav>
            <Title>Task Manager</Title>
            <Link to={"/user/profile"}>
                <UserName>{userName} <UserOutlined />
                </UserName>
            </Link>
        </Nav>
    );
}

export default NavbarComponent;