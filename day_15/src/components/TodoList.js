import React, { useState, useEffect } from "react";
import "./TodoList.css";

function TodoList({ todoList, removeTodo, updateTodo }) {
  return (
    <>
      <ol>
        {todoList.map((item) => {
          return (
            <li key={item.no}>
              <input
                type="checkbox"
                id={item.done ? "notyet" : "done"}
                className={item.no + "cbox"}
                onChange={(e) => {
                  item.done ? (e.target.id = "done") : (e.target.id = "");
                  item.done = !e.target.checked;
                  const newTodoList = [...todoList];
                  updateTodo(newTodoList);
                }}
              ></input>
              <input
                id={"title" + item.no}
                type="text"
                value={item.title}
                disabled
                onChange={(e) => {
                  item.title = e.target.value;
                  let newList = [...todoList];
                  updateTodo(newList);
                }}
              />
              <button
                mode={false}
                key={item.no}
                onClick={(e) => {
                  e.target.mode = !e.target.mode;
                  if (e.target.mode) {
                    let textDOM = document.getElementById("title" + item.no);
                    textDOM.disabled = false;
                    e.target.innerText = "수정완료";
                  } else {
                    let textDOM = document.getElementById("title" + item.no);
                    item.title = textDOM.value;
                    textDOM.disabled = true;
                    todoList[item.no - 1].title = textDOM.value;
                    updateTodo(todoList);
                    e.target.innerText = "수정";
                  }
                }}
              >
                수정
              </button>
              <button
                className={item.no}
                onClick={(e) => {
                  removeTodo(item.no);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default TodoList;
