import React from 'react';
import useDisplay from "./useDisplay.js";
import {Button, DisplayContainer, SearchContainer, SearchInput} from "./Display.styled.jsx";
import Header from "../../../components/Header/Header.jsx";
import Table from "../../../components/Table/Table.component.jsx";
import {Link} from "react-router-dom";

function Display() {
    const {
        tasks,
        error,
        isLoading,
        emptyTasks,
        tableHeaders,
        handleDeleteTask,
        searchTerm,
        handleSearchChange
    } = useDisplay();

    return (
        <DisplayContainer>
            <Header headerText="All Tasks" />
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search Task"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Link to="new"><Button>Add New</Button></Link>
            </SearchContainer>
            <Table
                tableHeaders={tableHeaders}
                tableData={tasks}
                handleDeleteTask={handleDeleteTask}
            />
        </DisplayContainer>
    );
}

export default Display;