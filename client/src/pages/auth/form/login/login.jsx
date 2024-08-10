import React from 'react';
import useForm from "../../../../hooks/useForm.jsx";
import {Button, Form, FormHeading, Input, Label} from "../Form.styled.js";
import {Link} from "react-router-dom";

function Login() {
    const {
        handleInputChange,
        handleFormSubmit,
        handleShowAndHidePassword,
        showPassword
    } = useForm()
    return (
        <Form onSubmit={handleFormSubmit}>
            <FormHeading>Login</FormHeading>
            <Label htmlFor="username">Username</Label>
            <Input
                type="text"
                name="username"
                onChange={handleInputChange}
            />

            <Label htmlFor="password">Password</Label>
            <Input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleInputChange}
            />
            <p onClick={handleShowAndHidePassword}> {showPassword ? "Hide Password" : "Show Password"} </p>

            <Button type="submit">Login</Button>

            <Link to="/auth/register">Don't have an account ? Register </Link>
        </Form>
    );
}

export default Login;