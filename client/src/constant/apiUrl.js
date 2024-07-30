const baseUrl = "http://localhost:8000";

const apiUrls = {
    register: `${baseUrl}/api/v1/users/register`,
    login: `${baseUrl}/api/v1/users/login`,
    createTask: `${baseUrl}/api/v1/tasks/new`,
    getAllTasks: `${baseUrl}/api/v1/tasks`,
};

export default apiUrls;
