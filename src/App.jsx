import React, { useState } from "react";

function App() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    if (text === "") {
      alert('Enter Todo');
    } else {
      setTodo([...todo, text]);
      setText('');
    }
  }

  function deleteTodo(index) {
    const updatedTodos = [...todo];
    updatedTodos.splice(index, 1);
    setTodo(updatedTodos);
  }

  function updateTodo(index) {
    const updatedText = prompt('Update This Todo', todo[index]);
    // if (updatedText !== null) {
    //   const updatedTodos = [...todo];
    //   updatedTodos[index] = updatedText;
    //   setTodo(updatedTodos);
    // }
    if (updatedText !== null) {
      const updatedTodos = [...todo];
      updatedTodos[index] = updatedText;
      setTodo(updatedTodos)

    }
  }

  return (
    <>
      <nav className="main-head">
        <h2>Todo App</h2>
      </nav>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">Add Todo</button>
      </form>
      <hr />

      <ul>
        {todo.map((item, index) => (
          <>
            <div className="limain">
              <li key={index}>
                {item}
                <button onClick={() => updateTodo(index)} className="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onClick={() => deleteTodo(index)} className="delete"><i class="fa-solid fa-trash"></i></button>
              </li>
            </div>
            <hr />
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
