import React, { useState } from "react";

function App(props) {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <h1>REACT TodoList</h1>
      <p>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            setTodoList([...todoList, newTask]);
            // state가 변경 되면서 component가 다시 렌더링 된다.
            setNewTask("");
          }}
        >
          추가
        </button>
      </p>
      <ul>
        {todoList.map((task, idx) => {
          if (task == "") return;
          return <li key={idx}>{task}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
