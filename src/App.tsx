import { useState } from "react";

import "./App.css";
import TodoCreate from "./compenents/TodoCreate";
import TodoList from "./compenents/TodoList";
function App() {
  return (
    <>
      <TodoCreate />
      <TodoList />
    </>
  );
}

export default App;

