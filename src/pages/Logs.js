function Logs() {

  const logs = [
    "10:00 AM - Deployment Success",
    "10:30 AM - Docker Restarted",
    "11:00 AM - Build Failed",
    "11:15 AM - Build Success",
    "12:00 PM - Kubernetes Pod Running"
  ];

  return (
    <div>
      <h1>Deployment Logs</h1>

      <div className="log-box">

        {logs.map((log,index)=>(
          <p key={index}>{log}</p>
        ))}

      </div>
    </div>
  );
}

export default Logs;