import React from "react";
import Watch from "./Watch";

function WatchList(props) {
  const { list, onDelete } = props;

  return (
    <ul className="clock_list">
      {list.map((el) => (
        <Watch key={el.id} {...el} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default WatchList;
