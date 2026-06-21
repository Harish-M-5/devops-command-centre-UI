function Kubernetes() {

  const pods = [
    {
      name: "frontend-pod",
      status: "Running"
    },
    {
      name: "backend-pod",
      status: "Running"
    },
    {
      name: "mongodb-pod",
      status: "Pending"
    }
  ];

  return (
    <div>
      <h1>Kubernetes Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Pods</h3>
          <p>35</p>
        </div>

        <div className="card">
          <h3>Running Pods</h3>
          <p>32</p>
        </div>

        <div className="card">
          <h3>Failed Pods</h3>
          <p>3</p>
        </div>

      </div>

      <table>
        <thead>
          <tr>
            <th>Pod Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {pods.map((pod, index) => (
            <tr key={index}>
              <td>{pod.name}</td>
              <td>{pod.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Kubernetes;