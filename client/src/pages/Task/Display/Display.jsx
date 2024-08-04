import React from 'react';
import useDisplay from "./useDisplay.js";
import { DisplayContainer } from "./Display.styled.jsx";
import Header from "../../../components/Header/Header.jsx";
import Table from "../../../components/Table/Table.component.jsx";
function Display() {
    const {
        tasks,
        error,
        isLoading,
        emptyTasks,
        tableHeaders,
        handleDeleteTask
    } = useDisplay();

    return (
        <DisplayContainer>
            <Header headerText="All Tasks" />
            <Table
                tableHeaders={tableHeaders}
                tableData={tasks}
                handleDeleteTask={handleDeleteTask}
            />
        </DisplayContainer>
    );
}

export default Display;
