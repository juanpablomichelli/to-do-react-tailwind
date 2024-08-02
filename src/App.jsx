import { useState } from "react";
import "./App.css";
import AddToDoForm from "./components/AddToDoForm";
import ToDo from "./components/ToDo";

const TODO_TEST_DATA = [
  { id: Math.random() * 1000, text: "Brush my teeths", isCompleted: false },
  {
    id: Math.random() * 1000,
    text: 'Complete "Brush my teeths" to-do',
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState([...TODO_TEST_DATA]);

  function handleAddToDo(text) {
    setTodos((prev) => {
      return [...prev, { id: Math.random() * 1000, text, isCompleted: false }];
    });
  }

  function handleDeleteTodo(id) {
    setTodos((prev) => {
      let updatedToDos = prev.filter((todo) => todo.id !== id);
      return updatedToDos;
    });
  }

  function handleCheckTodo(id) {
    setTodos((prev) => {
      // get toDo to change position
      let idx = prev.findIndex((todo) => todo.id === id);
      let todo = { ...prev[idx] };

      // change its completion state
      todo.isCompleted = !todo.isCompleted;

      // remove it from the list
      let updatedList = [...prev.filter((todo) => todo.id !== id)];

      // add it to the top or bottom of the list depending on its completion
      if (todo.isCompleted) return [todo, ...updatedList];

      return [...updatedList, todo];
    });
  }

  return (
    <div id="page-container">
      <header className="section flex flex-col gap-4 mt-4 mb-8 pb-8 border-b-2 border-violet-500">
        <h1 className="text-3xl font-bold text-left text-yellow-200">
          To-Do App
        </h1>
        <p className="text-left text-violet-800">
          <b>A simple To Do app.</b> Just write your task in the input field
          below and add your to-do! Then you can complete it or delete it below.
        </p>
      </header>
      <main className="section">
        <AddToDoForm onAddToDo={handleAddToDo} />
        {todos.length > 0 ? (
          <ul
            aria-label="To-do List"
            className="flex flex-col gap-6 my-4 mx-0 w-500px py-4 px-0 h-full"
          >
            {todos.map((todo) => (
              <ToDo
                key={todo.id}
                todo={todo}
                onDelete={handleDeleteTodo}
                onCheck={handleCheckTodo}
              />
            ))}
          </ul>
        ) : (
          <p className="my-8  text-yellow-400">
            <b>You have no tasks to be completed</b>. Try entering a new todo!
          </p>
        )}
      </main>
      <footer className="section">
        <p className="text-violet-500 text-right">
          &copy; 2024 Juan Pablo Michelli
        </p>
      </footer>
    </div>
  );
}

export default App;
