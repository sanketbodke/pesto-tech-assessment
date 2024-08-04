import apiUrl from "../../../constant/apiUrl.js";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiUrls from "../../../constant/apiUrl.js";

function UseDisplay() {
    const queryClient = useQueryClient();

    const {data, error, isLoading} = useQuery({
        queryKey: ["task"],
        queryFn: () => axios.get(`${apiUrl.getAllTasks}`).then(response => response.data)
    });

    const getDeleteTaskApi = (id) => apiUrls.getTaskById.replace(':id', id)

    const tableHeaders = ["Title", "Description", "Status", "Action"]
    const tasks = data?.data || [];

    const emptyTasks = tasks.length === 0

    const handleDeleteTask = async (taskId) => {
        try {
            await axios.delete(`${getDeleteTaskApi(taskId)}`);
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
        handleDeleteTask
    }
}

export default UseDisplay;