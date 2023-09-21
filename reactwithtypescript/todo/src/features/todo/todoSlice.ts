import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type TodoType = {
  todos: Array<{
    id: string;
    text: string;
    completed: boolean;
  }>;
};

const initialState: TodoType = {
  todos: [{ id: nanoid(), text: "hello world", completed: true }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state:any, action: PayloadAction<string>) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: true,
      };
      state.todos.push(todo);
    },
    removeTodo: (state:any, action: PayloadAction<string>) => {
      // Use filter to create a new array without the removed todo
      state.todos = state.todos.filter((todo:any) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
