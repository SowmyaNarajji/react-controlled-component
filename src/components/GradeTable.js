function GradeTable(props) {
  const sortedUser = props.userData.sort((a, b) =>
    a.lastname.localeCompare(b.lastname)
  );

  const dispalyTableData =
    sortedUser.length > 0 ? (
      sortedUser.map((element) => {
        return (
          <tr key={element.id}>
            <td>{element.firstname}</td>
            <td>{element.lastname}</td>
            <td>{element.grade}</td>
          </tr>
        );
      })
    ) : (
      <tr></tr>
    );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>{dispalyTableData}</tbody>
      </table>
    </div>
  );
}
export default GradeTable;
