function TableComponent({ tableHeaders, tableData }) {
    return (
        <table>
            <thead>
            <tr>
                {tableHeaders.map((tableHeader, key) => (
                    <th key={key}>{tableHeader}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {tableData.map((task, key) => (
                <tr key={key}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>update</td>
                    <td>delete</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TableComponent;
