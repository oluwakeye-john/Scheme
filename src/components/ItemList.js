import React, { useState, useEffect } from "react";
import { getListItems, newListItem, deleteItem } from "../utils/saveList";
import Item from "./Item";

const ItemList = () => {
  const [listItems, setListItems] = useState([]);

  const handleRefreshList = () => {
    const list = getListItems();
    setListItems(list);
  };

  useEffect(() => {
    setListItems(getListItems());
  }, []);

  const handleDeleteItem = (id) => {
    deleteItem(id);
    handleRefreshList();
  };

  const onUpdateList = (e) => {
    e.preventDefault();
    if (e.target.item.value) {
      newListItem({
        text: e.target.item.value,
        completed: false,
      });
      e.target.item.value = "";
      handleRefreshList();
    }
  };

  return (
    <ul className="list-group">
      <li className="list-group-item mb-4 mb-lg-5">
        <span className="ml-3">
          <form className="d-inline" onSubmit={onUpdateList}>
            <input
              type="text"
              name="item"
              className="border-0"
              placeholder="Type here"
            />
          </form>
        </span>
      </li>

      {listItems.length === 0 ? (
        <div>
          <p>No Todo yet</p>
        </div>
      ) : (
        listItems.map((item, index) => (
          <Item
            item={item}
            key={item.text + index}
            id={index}
            onRefresh={handleRefreshList}
            onDeleteItem={handleDeleteItem}
          />
        ))
      )}
    </ul>
  );
};

export default ItemList;
