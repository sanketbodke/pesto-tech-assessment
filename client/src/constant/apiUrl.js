const baseUrl = "http://localhost:8000";

const apiUrls = {
    register: `${baseUrl}/api/v1/users/register`,
    login: `${baseUrl}/api/v1/users/login`,
    createTask: `${baseUrl}/api/v1/tasks/new`,
    getAllTasks: `${baseUrl}/api/v1/tasks`,
    getTaskById: `${baseUrl}/api/v1/tasks/:id`,
    getUpdateAndDeleteTaskById: `${baseUrl}/api/v1/tasks/:id`,
    getUserTasks: `${baseUrl}/api/v1/tasks/userTasks/:userId`
};

export default apiUrls;
