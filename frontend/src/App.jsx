import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LogInteraction from "./pages/LogInteraction";
import ChatInterface from "./pages/ChatInterface";
import History from "./pages/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/log" element={<LogInteraction />} />
      <Route path="/chat" element={<ChatInterface />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;