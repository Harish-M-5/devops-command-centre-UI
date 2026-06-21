function GitHubActions() {

  const workflows = [
    {
      id: 101,
      project: "Harish-Bank",
      status: "Success"
    },
    {
      id: 102,
      project: "AI Resume Screener",
      status: "Running"
    },
    {
      id: 103,
      project: "DevOps Dashboard",
      status: "Failed"
    }
  ];

  return (
    <div>
      <h1>GitHub Actions</h1>

      <table>
        <thead>
          <tr>
            <th>Build ID</th>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {workflows.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.project}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GitHubActions;