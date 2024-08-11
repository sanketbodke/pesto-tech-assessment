import { useState } from 'react'; // Import useState
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiUrls from "../../../constant/apiUrl.js";
import currentUser from "../../../../utils/currentUser.js";
import { message } from 'antd';

function useDisplay() {
    const { user } = currentUser();
    const userId = user.currentUser.data.data.user._id;
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState('');

    const getUserTasksAPi = () => apiUrls.getUserTasks.replace(':userId', userId);

    const { data, error, isLoading } = useQuery({
        queryKey: ["task"],
        queryFn: () => axios.get(`${getUserTasksAPi()}`).then(response => response.data)
    });

    const getDeleteTaskApi = (id) => apiUrls.getTaskById.replace(':id', id);

    const tableHeaders = ["Title", "Description", "Status", "Action"];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const tasks = (data?.data || []).filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const emptyTasks = tasks.length === 0;

    const handleDeleteTask = async (taskId) => {
        try {
            await axios.delete(`${getDeleteTaskApi(taskId)}`);
            message.warning("Task deleted ");
            console.log('Task deleted successfully');
            queryClient.invalidateQueries(["task"]);
        } catch (exception) {
            console.error('Error deleting task:', exception);
        }
    };

    return {
        tasks,
        error,
        isLoading,
        emptyTasks,
        tableHeaders,
        handleDeleteTask,
        searchTerm,
        setSearchTerm,
        handleSearchChange
    }
}

export default useDisplay;