import React from 'react';
import useForm from "../../../../hooks/useForm.jsx";
import {Button, Form, Input, Label} from "../Form.styled.js";

function Login() {
    const {
        handleInputChange,
        handleFormSubmit,
        handleShowAndHidePassword,
        showPassword
    } = useForm()
    return (
        <Form onSubmit={handleFormSubmit}>
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

            <a href="/auth/register">Don't have an account ? Register </a>
        </Form>
    );
}

export default Login;