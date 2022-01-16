import React from "react";

export const IncompleateTodos = (props) => {
  const { incompleateTodos, onClickCompleate, onClickDelete } = props;
  return (
    <div className="icompleate-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleateTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompleate(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
