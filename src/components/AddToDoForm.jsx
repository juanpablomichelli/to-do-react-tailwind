import { useState } from "react";

export default function AddToDoForm({ onAddToDo }) {
  const [todoInput, setTodoInput] = useState({
    value: "",
    isValidInput: true,
  });
  function handleInputChange(e) {
    setTodoInput((prev) => {
      return { ...prev, value: e.target.value };
    });
  }

  function handleAdd() {
    if (todoInput.value.length > 0) {
      onAddToDo(todoInput.value);
      setTodoInput({ value: "", isValidInput: true });
    } else
      setTodoInput((prev) => ({
        ...prev,
        isValidInput: false,
      }));
  }
  return (
    <>
      <input
        type="text"
        placeholder={
          todoInput.isValidInput
            ? "Enter some text"
            : "Please enter a valid input"
        }
        value={todoInput.value}
        onChange={handleInputChange}
        className={`rounded-lg p-1 pl-4 mr-4 w-6/12 text-violet-400 focus:outline-violet-500 bg-violet-100 ${
          !todoInput.isValidInput ? "placeholder:text-red-400" : ""
        }`}
      />
      <button
        className="text-violet-200 border-[1px] border-violet-100 rounded-md p-2 text-violet-100 hover:bg-violet-500"
        onClick={handleAdd}
      >
        Add To Do
      </button>
    </>
  );
}
