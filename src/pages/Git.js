function Git() {

  const repos = [
    "Mobile Bank Apps",
    "AI-Resume-Screener",
    "DevOps-Dashboard",
    "Placement-Portal"
  ];

  return (
    <div>
      <h1>Git Repositories</h1>

      <table>
        <thead>
          <tr>
            <th>Repository</th>
          </tr>
        </thead>

        <tbody>
          {repos.map((repo, index) => (
            <tr key={index}>
              <td>{repo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Git;