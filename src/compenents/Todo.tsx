import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Todotype } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";
import { updateTodo } from "../redux/todoSlice";
interface TodoProps {
  todo: Todotype;
}

function Todo({ todo }: TodoProps) {
  const { id, content } = todo;
  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const removeTodo = () => {
    dispatch(removeTodoById(id));
  };
  const handleUpdateTodo = () => {
    const payload: Todotype = {
      id: id,
      content: newtodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };
  const [newtodo, setnewtodo] = useState(content);
  return (
    <div className="todo">
      <div className="todo-content">
        {" "}
        {editable ? (
          <input
            className="edit-input"
            value={newtodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setnewtodo(e.target.value)
            }
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div className="icons-div">
        <IoMdRemoveCircleOutline className="icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="icons" onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit className="icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
