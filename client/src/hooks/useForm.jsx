import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from 'axios';
import apiUrls from '../constant/apiUrl.js';
import { logInStart, logInSuccess ,logInFailure } from "../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const useForm = () => {
    const [formData, setFormData] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    const { loading, errors } = useSelector((state) => state.user);
    const [_, setCookies] = useCookies(["access_token"]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        const apiUrl = location.pathname === '/auth/register' ? apiUrls.register : apiUrls.login;

        try {
            const response = await axios.post(apiUrl, formData);
            setSuccess(true);
            console.log('Form submitted successfully:', response.data);

            if (location.pathname === '/auth/login') {
                dispatch(logInStart());
                dispatch(logInSuccess(response));
                setCookies("access_token", response.data.data.accessToken);
            }
        } catch (exception) {
            setError(exception.response?.data?.message || 'Error submitting form');
            console.error('Error submitting form:', exception);

            if (location.pathname === '/auth/login') {
                dispatch(logInFailure());
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleShowAndHidePassword = () => setShowPassword(!showPassword);

    return {
        formData,
        showPassword,
        handleInputChange,
        handleFormSubmit,
        handleShowAndHidePassword,
        isLoading,
        error,
        success,
        errors,
    };
};

export default useForm;
