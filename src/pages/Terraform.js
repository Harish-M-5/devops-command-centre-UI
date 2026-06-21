function Terraform() {

  const resources = [
    {
      name: "EC2 Instance",
      status: "Created"
    },
    {
      name: "S3 Bucket",
      status: "Created"
    },
    {
      name: "RDS Database",
      status: "Pending"
    }
  ];

  return (
    <div>
      <h1>Terraform Infrastructure</h1>

      <table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {resources.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Terraform;