import useForm from "../../../../hooks/useForm.jsx";
import {Form, Label, Input, Button} from "../Form.styled.js";
function Register() {

    const {
        handleInputChange,
        handleFormSubmit,
        handleShowAndHidePassword,
        showPassword,
    } = useForm();

    return (
        <Form onSubmit={handleFormSubmit}>
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

            <a href="/auth/login">Already have an account ? Login </a>
        </Form>
    );
}

export default Register;