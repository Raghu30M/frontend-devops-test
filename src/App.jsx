
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Unable to connect to backend"));
  }, []);

  return (
    <div>
      <h1>DevOps Practice Project</h1>
      <p>Backend status: {message}</p>
    </div>
  );
}

export default App;
