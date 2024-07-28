import React from 'react';
import useForm from "../../../../hooks/useForm.jsx";

function Login() {
    const {
        handleInputChange,
        handleFormSubmit,
        handleShowAndHidePassword,
        showPassword
    } = useForm()
    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                onChange={handleInputChange}
            />

            <label htmlFor="password">Password</label>
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleInputChange}
            />
            <p onClick={handleShowAndHidePassword}> {showPassword ? "Hide Password" : "Show Password"} </p>

            <button type="submit">Login</button>

            <a href="/auth/register">Don't have an account ? Register </a>
        </form>
    );
}

export default Login;