import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleateTodos } from "./components/incompleateTodos";
import { CompleateTodos } from "./components/compleateTodo";

export const App = () => {
  const [inputTodos, setInputTodos] = useState("");
  const [icompleateTodos, setIcompleateTodos] = useState([]);
  const [compleateTodos, setCompleateTodos] = useState([]);

  const onChangeTodoText = (event) => setInputTodos(event.target.value);
  const onClickAdd = () => {
    const newTodos = [...icompleateTodos, inputTodos];
    setIcompleateTodos(newTodos);
    setInputTodos("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...icompleateTodos];
    newTodos.splice(index, 1);
    setIcompleateTodos(newTodos);
  };
  const onClickCompleate = (index) => {
    const newImcompleateTodos = [...icompleateTodos];
    newImcompleateTodos.splice(index, 1);

    const newCompleateTodos = [...compleateTodos, icompleateTodos[index]];
    setIcompleateTodos(newImcompleateTodos);
    setCompleateTodos(newCompleateTodos);
  };
  const onClickBackButton = (index) => {
    const newCompleateTodos = [...compleateTodos];
    newCompleateTodos.splice(index, 1);

    const newImcompleateTodos = [...icompleateTodos, compleateTodos[index]];
    setCompleateTodos(newCompleateTodos);
    setIcompleateTodos(newImcompleateTodos);
  };
  return (
    <>
      <InputTodo
        todoText={inputTodos}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleateTodos
        incompleateTodos={icompleateTodos}
        onClickCompleate={onClickCompleate}
        onClickDelete={onClickDelete}
      />
      <CompleateTodos
        compleateTodos={compleateTodos}
        onClickBackButton={onClickBackButton}
      />
    </>
  );
};
