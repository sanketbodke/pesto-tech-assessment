import {Form, Input, Select, Option, TextArea, Button, TitleAndStatus, Description} from "../task.styled.jsx";
import useUpdate from "./useUpdate.js";
import Header from "../../../components/Header/Header.jsx";
function Update() {

    const {
        task,
        handleInputChange,
        handleUpdateTask
    } = useUpdate()

    return (
        <>
            <Header
                headerText={"Update Task"}
            />
            <Form onSubmit={handleUpdateTask}>
                <TitleAndStatus>
                    <Input
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleInputChange}
                    />

                    <Select
                        defaultValue={"status"}
                        name="status"
                        onChange={handleInputChange}
                    >
                        <Option value={"status"}>{task.status}</Option>
                        <Option value={"Todo"}>To do</Option>
                        <Option value={"InProgress"}>InProgress</Option>
                        <Option value={"Done"}>Done</Option>
                    </Select>
                </TitleAndStatus>

                <Description>
                    <TextArea
                        name="description"
                        value={task.description}
                        onChange={handleInputChange}
                    />
                </Description>

                <Button type="submit">update</Button>
            </Form>
        </>
    );
}

export default Update;