import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { RootState } from "../types/types";
interface TodoItem {
  id: number;
  text: string;
}

const Todo = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [doneTodos, setDoneTodos] = useState<number[]>([]);

  const handleCheckboxChange = (todo: TodoItem) => {
    const isDone = doneTodos.includes(todo.id);

    if (isDone) {
      setDoneTodos((prevDoneTodos) =>
        prevDoneTodos.filter((doneTodoId) => doneTodoId !== todo.id)
      );
    } else {
      setDoneTodos([...doneTodos, todo.id]);
    }
  };

  const isTodoDone = (todo: TodoItem) => doneTodos.includes(todo.id);

  //count done todos
  const doneCount = doneTodos.length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Things to do</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between border-b border-gray-300 py-2 ${
              isTodoDone(todo) ? "line-through text-green-600" : ""
            }`}
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 h-4 w-4"
                checked={isTodoDone(todo)}
                onChange={() => handleCheckboxChange(todo)}
              />
              <span className="ml-2">{todo.text}</span>
            </label>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-600"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mt-4">Done:{doneCount}</h2>
      <ul>
        {todos.map(
          (todo) =>
            isTodoDone(todo) && (
              <li key={todo.id} className="line-through text-green-600 py-2">
                {todo.text}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Todo;
