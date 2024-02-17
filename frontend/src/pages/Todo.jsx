import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const [done, setDone] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setInput("");
    setTodos((prev) => [...prev, input]);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          name="todo"
          value={input}
          onChange={(e) => setInput((prev) => (e.target.name = e.target.value))}
        />
        <button type="submit">Add</button>
      </form>

      {todos.length === 0 ? (
        <h3>No todo's</h3>
      ) : (
        <>
          <h3>Todo's</h3>
          <ul>
            {todos.map((item, el) => (
              <li
                key={el}
                style={{ textDecoration: done ? "line-through" : "" }}
                onClick={() => setDone(!done)}
              >
                {item}
                <button
                  onClick={() =>
                    setTodos((prev) => prev.filter((item, i) => i !== el))
                  }
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
