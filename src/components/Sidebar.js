import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>DevOps Command Center</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/git">Git</Link>
      <Link to="/docker">Docker</Link>
      <Link to="/aws">AWS</Link>
      <Link to="/login">Login</Link>
<Link to="/githubactions">GitHub Actions</Link>
<Link to="/kubernetes">Kubernetes</Link>
<Link to="/terraform">Terraform</Link>
<Link to="/monitoring">
Monitoring
</Link>

<Link to="/logs">
Logs
</Link>

<Link to="/settings">
Settings
</Link>
    </div>
  );
}

export default Sidebar;