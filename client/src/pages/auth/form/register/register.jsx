import useForm from "../../../../hooks/useForm.jsx";
function Register() {

    const {
        handleInputChange,
        handleFormSubmit,
        handleShowAndHidePassword,
        showPassword,
    } = useForm();

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                onChange={handleInputChange}
            />

            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                onChange={handleInputChange}
            />

            <label htmlFor="password">Password</label>
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleInputChange}
            />
            <p onClick={handleShowAndHidePassword}> {showPassword ? "Hide Password" : "Show Password"} </p>

            <button type="submit">SignUp</button>

            <a href="/auth/login">Already have an account ? Login </a>
        </form>
    );
}

export default Register;