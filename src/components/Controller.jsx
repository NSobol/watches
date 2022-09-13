import React, { useState } from "react";
import AddForm from "./AddForm";
import WatchList from "./WatchList";

function Controller(props) {
  const [list, setList] = useState([]);

  const addWatch = (watch) => {
    setList((prevList) => [...prevList, watch]);
  };

  const onDelete = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  return (
    <div className="app">
      <AddForm addWatch={addWatch} />
      <WatchList list={list} onDelete={onDelete} />
    </div>
  );
}

export default Controller;
