import React, { useState } from "react";
import "./App.css";

function ItemRow({ item, removeItem }) {
  return (
    <li>
      <p>
        <input
          type="checkbox"
          onChange={(e) => {
            c_boxOnChange(item, removeItem);
          }}
          checked={item.done}
        />
        <input
          type="text"
          value={item.title}
          id={item.done ? "done" : "notYet"}
          disabled
        />
        <button
          onClick={(e) => {
            removeItem(item.no);
          }}
        >
          삭제
        </button>
      </p>
    </li>
  );
}

function InputItem({ appendItem }) {
  // input의 value로 사용 할 경우 초기값 필수.
  const [newWork, setNewWork] = useState("");
  return (
    <div>
      할일 :
      <input
        type="text"
        value={newWork}
        onChange={(e) => {
          setNewWork(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          appendItem(newWork);
        }}
      >
        추가
      </button>
    </div>
  );
}

// Redux를 이용하면 해결된다.
function TodoList({ todoList, removeItem, saveList }) {
  return (
    <div>
      <ul>
        {todoList.map((item, idx) => {
          return (
            <ItemRow
              key={item.no}
              item={item}
              removeItem={removeItem}
              cBoxOnChange={c_boxOnChange}
              saveList={saveList}
            />
          );
        })}
      </ul>
    </div>
  );
}

function App(props) {
  const [noCount, setNoCount] = useState();
  const [todoList, setTodoList] = useState(() => {
    let list = JSON.parse(localStorage.getItem("todoList"));
    if (list) {
      setNoCount(list.length + 1);
      return list;
    } else {
      setNoCount(1);
      return [{ no: 1, title: "TEST", done: false }];
    }
  });

  function appendItem(newItem) {
    console.log(noCount);
    setTodoList([...todoList, { no: noCount, title: newItem, done: false }]);
    localStorage.setItem(
      "todoList",
      JSON.stringify([
        ...todoList,
        { no: noCount, title: newItem, done: false },
      ])
    );
    setNoCount(noCount + 1);
  }
  function removeItem(no) {
    var newList = todoList.filter((item, idx) => {
      return item.no !== no;
    });
    setNoCount(noCount - 1);
    localStorage.setItem("todoList", JSON.stringify(newList));
    setTodoList(newList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <InputItem appendItem={appendItem} />
      <hr />
      <TodoList todoList={todoList} removeItem={removeItem} />
    </>
  );
}

function c_boxOnChange(item, removeItem) {
  item.done = !item.done;
  removeItem(0);
}

export default App;

//취소선 그리기 기능 추가
//TodoList data를 localStorage에 저장
