import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <div className="p-4 w-[50%]">
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="flex-1 border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Add a new todo..."
          value={todoText}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
