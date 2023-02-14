import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import "./components/TodoList.css";

function App() {
  const list = [
    { no: 1, title: "TEST1", done: false },
    { no: 2, title: "TEST2", done: false },
  ];

  const [todoList, setTodoList] = useState(list);

  function removeTodo(no) {
    var newList = todoList.filter((item, idx) => {
      return item.no != no;
    });
    setTodoList(newList);
  }

  function modTodo(newNo, newTitle) {
    const newList = [...TodoList, { no: newNo, title: newTitle, done: false }];
    setTodoList(newList);
  }

  function updateTodo(todo) {
    const newTodoList = [...todo];
    console.log("updataTodo");
    console.log(newTodoList);
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <div>
        <TodoList
          todoList={todoList}
          removeTodo={removeTodo}
          modTodo={modTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}

export default App;
