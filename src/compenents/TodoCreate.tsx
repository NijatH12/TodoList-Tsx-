import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { Todotype } from "../types/Types";
function TodoCreate() {
  const dispatch = useDispatch();

  const [newtodo, setnewtodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newtodo.trim().length == 0) {
      alert("Enter Todo");
      return;
    }
    const payload: Todotype = {
      id: Math.floor(Math.random() * 9999999),
      content: newtodo,
    };
    dispatch(createTodo(payload));
    setnewtodo("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        {" "}
        <input
          className="input"
          value={newtodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setnewtodo(e.target.value)
          }
          placeholder="Enter Todo"
          type="text"
        />
        <button className="button" onClick={handleCreateTodo}>
          Create
        </button>
      </div>
    </div>
  );
}

export default TodoCreate;
