import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Todotype } from "../types/Types";
import { removeAllTodo } from "../redux/todoSlice";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const removeAll = () => {
    dispatch(removeAllTodo());
  };
  return (
    <div className="main-todo">
      {todos &&
        todos.map((todo: Todotype) => <Todo key={todo.id} todo={todo} />)}
      <div className="btnremove">
        {todos.length != 0 ? (
          <button onClick={removeAll} className="button-remove">
            Clear Todos
          </button>
        ) : (
          <p className="empty-todos">All Todos Cleared!</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
