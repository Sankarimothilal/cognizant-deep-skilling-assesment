import "./App.css";
import GitClient from "./GitClient";
import { useEffect, useState } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const gitClient = new GitClient();

    gitClient.getRepositories("TechieSyed").then((data) => {
      setRepositories(data);
    });
  }, []);

  return (
    <div className="App">
      <h2>Git repositories of User - TechieSyed</h2>

      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;