import React from "react";
import TextBox from "./textBox";
import { changeStatus } from "../utils/saveList";

const Item = ({ item, id, onDeleteItem }) => {
  const handleCompleted = (e) => {
    changeStatus(id, e.target.checked);
  };

  return (
    <li className="list-group-item mb-4">
      <span>
        <input
          type="checkbox"
          onChange={handleCompleted}
          defaultChecked={item.completed}
        />
        <button className="btn btn-sm ml-2" onClick={() => onDeleteItem(id)}>
          <span className="fas fa-trash" />
        </button>
      </span>
      <span className="ml-3">
        <TextBox item={item} />
      </span>
    </li>
  );
};

export default Item;
