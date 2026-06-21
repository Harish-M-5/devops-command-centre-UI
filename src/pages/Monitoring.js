function Monitoring() {
  return (
    <div>
      <h1>System Monitoring</h1>

      <div className="cards">

        <div className="card">
          <h3>CPU Usage</h3>
          <p>68%</p>
        </div>

        <div className="card">
          <h3>Memory Usage</h3>
          <p>72%</p>
        </div>

        <div className="card">
          <h3>Disk Usage</h3>
          <p>55%</p>
        </div>

        <div className="card">
          <h3>Network Traffic</h3>
          <p>1.8 GB</p>
        </div>

      </div>
    </div>
  );
}

export default Monitoring;