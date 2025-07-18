import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CreateElectionPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [electionName, setElectionName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake auth logic
    setIsAuthenticated(true);
  };

  const handleCreate = () => {
    const id = uuidv4();
    // You’d save the election to backend here
    navigate(`/election/${id}`);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <>
          <h2>Login or Register</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h2>Create Election</h2>
          <p>Random Election ID will be generated on creation.</p>
          <input
            placeholder="Election Name"
            value={electionName}
            onChange={(e) => setElectionName(e.target.value)}
          />
          <input
            placeholder="Election Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleCreate}>Create</button>
        </>
      )}
    </div>
  );
};

export default CreateElectionPage;
