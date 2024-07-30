import useDisplay from "./useDisplay.js";
import { DisplayContainer } from "./Display.styled.jsx"
import Table from "../../../components/Table/Table.component.jsx";
function Display() {
    const {
        tasks,
        error,
        isLoading,
        emptyTasks,
        tableHeaders
    } = useDisplay()
    return (
        <DisplayContainer>
            <Table
                tableHeaders={tableHeaders}
                tableData={tasks}
            />
        </DisplayContainer>
    );
}

export default Display;
