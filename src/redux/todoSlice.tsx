import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, Todotype } from "../types/Types";

const initialState: TodoInitialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<Todotype>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodoById: (
      state: TodoInitialState,
      action: PayloadAction<number>
    ) => {
      state.todos = [
        ...state.todos.filter((todo: Todotype) => todo.id != action.payload),
      ];
    },
    updateTodo: (state: TodoInitialState, action: PayloadAction<Todotype>) => {
      state.todos = [
        ...state.todos.map((todo: Todotype) =>
          todo.id !== action.payload.id ? todo : action.payload
        ),
      ];
    },
    removeAllTodo: (state: TodoInitialState) => {
      state.todos = [];
    },
  },
});
export const { createTodo, removeTodoById, updateTodo, removeAllTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
