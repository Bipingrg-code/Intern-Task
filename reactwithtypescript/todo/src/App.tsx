import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col">
      <Todo />
      <AddTodo />
    </div>
  );
}

export default App;
