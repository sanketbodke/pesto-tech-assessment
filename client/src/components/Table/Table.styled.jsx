import styled from "styled-components";

export const TableContainer = styled.div`
    width: 100%;
    height: 90vh;
    overflow-x: auto;
`;

export const StyledTable = styled.table`
    border: 1px solid #000000;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
`;

export const TableHead = styled.thead`
    background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
    &:hover {
        background-color: #f1f1f1;
    }
`;

export const TableHeader = styled.th`
    padding: 16px;
    border: 1px solid #dddddd;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    color: #53a7f5;
    z-index: 2;
`;

export const TableCell = styled.td`
    padding: 16px;
    border: 1px solid #dddddd;
`;

export const StatusText = styled.p`
    display: inline;
    background-color: ${({ status }) => {
    switch (status) {
        case 'Done':
            return '#93f1a8';
        case 'InProgress':
            return '#fae399';
        case 'Todo':
            return '#fa9ea5';
        default:
            return '#ffffff';
    }
}};
    padding: 4px; 
    border-radius: 4px;
    font-size: 14px;
`;

export const ActionFields = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 40px;
`;

export const DeleteTask = styled.p`
    font-size: 14px;
    cursor: pointer;
`;