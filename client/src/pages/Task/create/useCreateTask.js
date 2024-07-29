import  {useState} from 'react';
import apiUrls from "../../../constant/apiUrl.js";
import axios from "axios";
import currentUser from "../../../../utils/currentUser.js";

function UseCreateTask() {
    const {
        user
    } = currentUser()

    const userId = user.currentUser.data.data.user._id;

    const [newTask, setNewTask] = useState({
        title: "",
        status: "",
        description: "",
        userOwner: userId
    })

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleInputChange = (event) => {
        const {name, value} = event.target

        setNewTask({
            ...newTask,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        console.log(newTask)
        setIsLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const response = await axios.post(
                `${apiUrls.createTask}`,
                newTask
            )
            setSuccess(true);
            console.log('Task added successfully:', response.data);
        }catch (exception){
            setError(exception.response?.data?.message || 'Error adding task');
            console.error('Error adding form:', exception);
        }  finally {
            setIsLoading(false);
        }
    }
    return {
        handleInputChange,
        handleFormSubmit,
        isLoading,
        error,
        success
    }
}

export default UseCreateTask;