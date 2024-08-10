import useForm from "../../../../hooks/useForm.jsx";
import {Form, Label, Input, Button, FormHeading} from "../Form.styled.js";
import React from "react";
import {Link} from "react-router-dom";
function Register() {

    const {
        handleInputChange,
        handleFormSubmit,
        handleShowAndHidePassword,
        showPassword,
    } = useForm();

    return (
        <Form onSubmit={handleFormSubmit}>
            <FormHeading>Register</FormHeading>
            <Label htmlFor="username">Username</Label>
            <Input
                type="text"
                name="username"
                onChange={handleInputChange}
            />

            <Label htmlFor="email">Email</Label>
            <Input
                type="text"
                name="email"
                onChange={handleInputChange}
            />

            <Label htmlFor="password">Password</Label>
            <Input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleInputChange}
            />
            <p onClick={handleShowAndHidePassword}> {showPassword ? "Hide Password" : "Show Password"} </p>

            <Button type="submit">SignUp</Button>

            <Link to="/auth/login">Already have an account ? Login </Link>
        </Form>
    );
}

export default Register;