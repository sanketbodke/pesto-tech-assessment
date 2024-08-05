import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiUrls from "../../../constant/apiUrl.js";
import currentUser from "../../../../utils/currentUser.js";

function UseDisplay() {
    const {
        user
    } = currentUser()

    const userId = user.currentUser.data.data.user._id;
    const queryClient = useQueryClient();

    const getUserTasksAPi = () => apiUrls.getUserTasks.replace(':userId', userId)

    const {data, error, isLoading} = useQuery({
        queryKey: ["task"],
        queryFn: () => axios.get(`${getUserTasksAPi()}`).then(response => response.data)
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