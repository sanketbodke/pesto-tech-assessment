import useCreateTask from "./useCreateTask.js";
function CreateTask() {
    const {
        handleInputChange,
        handleFormSubmit
    } = useCreateTask()

    return (
        <form onSubmit={handleFormSubmit}>
            <label>Title</label>
            <input
                type="text"
                name="title"
                onChange={handleInputChange}
            />

            <label>Description</label>
            <input
                type="text"
                name="description"
                onChange={handleInputChange}
            />

            <label>Status</label>
            <input
                type="text"
                name="status"
                onChange={handleInputChange}
            />

            <button type="submit">Add Task</button>
        </form>
    );
}

export default CreateTask;