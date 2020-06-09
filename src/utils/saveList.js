export const newListItem = (list, refreshList) => {
  try {
    const jsonList = list;
    const initialList = localStorage.getItem("listItems");
    const jsonInitialList = JSON.parse(initialList);
    let newList = [];

    if (jsonInitialList) {
      // const number = jsonInitialList.length;
      // jsonList.id = number;
      newList = newList.concat(jsonInitialList).concat(jsonList);
    } else {
      // jsonList.id = 0;
      newList = [jsonList];
    }
    updateList(newList);
  } catch (err) {
    console.log("Error ", err);
  }
};

export const getListItems = () => {
  const fetchItems = localStorage.getItem("listItems");
  try {
    const jsonList = JSON.parse(fetchItems);
    const newList = jsonList.map((item, index) => {
      return item;
    });
    return jsonList ? newList : [];
  } catch {
    return [];
  }
};

const updateList = (list) => {
  localStorage.setItem("listItems", JSON.stringify(list));
};

export const changeStatus = (id, value) => {
  const lists = getListItems();
  if (lists) {
    const newList = lists.map((item, index) => {
      if (index === id) {
        return {
          ...item,
          completed: value,
        };
      } else {
        return item;
      }
    });
    updateList(newList);
  }
};

export const deleteItem = (id) => {
  const lists = getListItems();
  if (lists) {
    const newList = lists.filter((item, index) => {
      if (index === id) {
        return false;
      }
      return true;
    });
    updateList(newList);
  }
};

export const clearAll = () => {
  localStorage.setItem("listItems", JSON.stringify([]));
};
