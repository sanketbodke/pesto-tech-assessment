import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import apiUrls from '../constant/apiUrl.js';

const useForm = () => {
    const [formData, setFormData] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const location = useLocation();

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
        } catch (exception) {
            setError(exception.response?.data?.message || 'Error submitting form');
            console.error('Error submitting form:', exception);
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
    };
};

export default useForm;
