import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import apiUrls from "../../../constant/apiUrl.js";

function UseCreateTask() {
    const [task, setTask] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const taskId = useParams()
    const getUpdateTaskApi = (id) => apiUrls.getTaskById.replace(':id', id)

    useEffect(() => {
        const getTask = async () => {
            const response = await axios.get(`${getUpdateTaskApi(taskId.id)}`)
            setTask(response.data.data)
        }

        getTask()
    }, [])

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setTask({
            ...task,
            [name]: value
        })
    }
    const handleUpdateTask = async (event) => {
        event.preventDefault()
        setIsLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const response = await axios.put(
                `${getUpdateTaskApi(taskId.id)}`,
                task
            )
            setSuccess(true);
            console.log('Task updated successfully:', response.data);
        }catch (exception){
            setError(exception.response?.data?.message || 'Error updating task');
            console.error('Error updating form:', exception);
        }  finally {
            setIsLoading(false);
        }
    }

    return {
        task,
        handleInputChange,
        handleUpdateTask,
    }
}

export default UseCreateTask