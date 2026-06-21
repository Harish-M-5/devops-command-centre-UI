function Docker() {

  const containers = [
    { name: "frontend-app", status: "Running" },
    { name: "backend-api", status: "Running" },
    { name: "mongodb", status: "Stopped" }
  ];

  return (
    <div>
      <h1>Docker Containers</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {containers.map((container, index) => (
            <tr key={index}>
              <td>{container.name}</td>
              <td>{container.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Docker;