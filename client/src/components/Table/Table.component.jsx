import React from "react";
import {
    TableContainer,
    StyledTable,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    StatusText,
    ActionFields,
    DeleteTask
} from "./Table.styled.jsx";
import { Link } from "react-router-dom";

function Table({ tableHeaders, tableData, handleDeleteTask }) {
    return (
        <TableContainer>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        {tableHeaders.map((tableHeader, key) => (
                            <TableHeader key={key}>{tableHeader}</TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <tbody>
                {tableData.map((task, key) => (
                    <TableRow key={key}>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.description}</TableCell>
                        <TableCell>
                            <StatusText status={task.status}>{task.status}</StatusText>
                        </TableCell>
                        <TableCell>
                            <ActionFields>
                                <Link to={`/tasks/${task._id}/update`}>Update</Link>
                                <DeleteTask onClick={() => handleDeleteTask(task._id)}>Delete</DeleteTask>
                            </ActionFields>
                        </TableCell>
                    </TableRow>
                ))}
                </tbody>
            </StyledTable>
        </TableContainer>
    );
}

export default Table;