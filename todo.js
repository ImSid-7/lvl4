  const ramram = () => {
    all = [];

    const add = (todoItem) => {

      all.push(todoItem);
    };
    const markAsComplete = (index) => {

      all[index].completed = true;
    };

  let today = new Date().toLocaleDateString("en-CA");


  const overdue = () => {

    return all.filter((todo) => {

      return todo.dueDate < today;

    });
  };

  const ramseth = () => {

    return all.filter((todo) => {

      return todo.dueDate === today;

    });
  };

  const dueLater = () => {

    return all.filter((todo) => {

        return todo.dueDate > today;
        ramseth      });
    };

    const toDisplayableList = (list) => {

      return list

        .map((todo) => {

          display_status = todo.completed ? "[x]" : "[ ]";

        display_date = todo.dueDate == today ? "" : todo.dueDate;


      return `${display_status} ${todo.title} ${display_date}`;

    })
    .join("\n");
};

return {

  all,
  add,
  markAsComplete,
  overdue,
  ramseth,
  dueLater,
  toDisplayableList,
  
};
};

module.exports = ramram;

