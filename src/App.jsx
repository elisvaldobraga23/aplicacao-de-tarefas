import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";

import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;