function Dashboard() {
  return (
    <div>
      <h1>Welcome to the DevOps Command Center</h1>

      <div className="cards">

        <div className="card">
          <h3>Repositories</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Docker Containers</h3>
          <p>32</p>
        </div>

        <div className="card">
          <h3>AWS Resources</h3>
          <p>45</p>
        </div>

        <div className="card">
          <h3>System Health</h3>
          <p>99%</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;