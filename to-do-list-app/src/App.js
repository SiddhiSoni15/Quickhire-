import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { BsSun, BsMoon } from "react-icons/bs";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <nav className="navbar">
        <h1>To-Do List</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>
      </nav>
      <TodoList />
    </div>
  );
};

export default App;
