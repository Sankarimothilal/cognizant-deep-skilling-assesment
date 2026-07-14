import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import TrainersList from "./trainerList";
import TrainerDetails from "./trainerDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My Academy Trainers App</h1>

        <Link to="/home">Home</Link> |{" "}
        <Link to="/trainers">Show Trainers</Link>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;