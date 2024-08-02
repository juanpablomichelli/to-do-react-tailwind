import "../ToDo.css";
export default function ToDo({ todo, onDelete, onCheck }) {
  const { id, text, isCompleted } = todo;

  return (
    <li
      className={`todo ${isCompleted ? "completed" : ""} flex justify-between`}
    >
      <div className="todo__container flex gap-4 max-w-[75%] rounded-lg bg-violet-500 p-3">
        <button
          className="todo__complete-button border-2 border-yellow-200 after:bg-yellow-200"
          onClick={() => onCheck(id)}
        ></button>
        <p className="todo__text text-violet-200">{text}</p>
      </div>
      <div>
        <button
          className="todo__delete text-violet-800 hover:text-violet-600"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
