import React from "react";
import { newListItem } from "../utils/saveList";

const TextBox = ({ item, onRefresh }) => {
  const onUpdateList = (e) => {
    e.preventDefault();
    if (e.target.item.value) {
      newListItem({
        text: e.target.item.value,
        completed: false,
      });
      e.target.item.value = "";
      onRefresh();
    }
  };

  return (
    <form className="d-inline" onSubmit={onUpdateList}>
      <input
        type="text"
        name="item"
        className="border-0"
        placeholder="Type here"
        defaultValue={item.text}
      />
    </form>
  );
};

export default TextBox;
