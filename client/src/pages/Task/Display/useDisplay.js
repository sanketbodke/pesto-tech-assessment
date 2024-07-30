import apiUrl from "../../../constant/apiUrl.js";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function UseDisplay() {
    const {data, error, isLoading} = useQuery({
        queryKey: ["task"],
        queryFn: () => axios.get(`${apiUrl.getAllTasks}`).then(response => response.data)
    });

    const tableHeaders = ["Title", "Description", "Status", "Action"]
    const tasks = data?.data || [];

    const emptyTasks = tasks.length === 0

    return {
        tasks,
        error,
        isLoading,
        emptyTasks,
        tableHeaders
    }
}

export default UseDisplay;