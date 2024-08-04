import React from "react";
import {
    TableContainer,
    StyledTable,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
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
                        <TableCell>{task.status}</TableCell>
                        <TableCell>
                            <ActionFields>
                                <Link to={`/task/${task._id}/update`}>Update</Link>
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
