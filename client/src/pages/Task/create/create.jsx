import useCreateTask from "./useCreateTask.js";
import {Form, Description, Input, Option, Select, TextArea, TitleAndStatus, Button} from "../task.styled.jsx";
import Header from "../../../components/Header/Header.jsx";
function CreateTask() {
    const {
        handleInputChange,
        handleFormSubmit
    } = useCreateTask()

    return (
    <>
        <Header
            headerText={"Create New Task"}
        />
        <Form onSubmit={handleFormSubmit}>
            <TitleAndStatus>
                <Input
                    type="text"
                    name="title"
                    onChange={handleInputChange}
                    placeholder="Title"
                />

                <Select
                    defaultValue={"status"}
                    name="status"
                    onChange={handleInputChange}
                >
                    <Option value={"status"} disabled>Status</Option>
                    <Option value={"Todo"}>To Do</Option>
                    <Option value={"InProgress"}>In Progress</Option>
                    <Option value={"Done"}>Done</Option>
                </Select>

            </TitleAndStatus>

            <Description>
                <TextArea
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Description"
                />
            </Description>

            <Button type="submit">Add Task</Button>
        </Form>
    </>
    );
}

export default CreateTask;