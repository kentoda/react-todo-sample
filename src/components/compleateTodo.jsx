import React from "react";

export const CompleateTodos = (props) => {
  const { compleateTodos, onClickBackButton } = props;
  return (
    <div className="complate-area">
      <p className="title">完了のTODO</p>
      <ul>
        <div className="list-row">
          {compleateTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBackButton(index)}>戻す</button>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
