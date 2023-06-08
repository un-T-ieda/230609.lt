import "ress";
import "./style.scss";

type TodoList = Todo[];

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

/**
 * @description
 * サンプルデータとして TODO リストを取得して JSON を返却する
 */
const fetchTodo = async (): Promise<TodoList> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

/**
 * @description
 * id="table-body" に todo の HTML を追加する
 */
const setTableBody = (todo: Todo) => {
  const tableBody = document.getElementById("table-body");

  if (tableBody) {
    const template = (todo: Todo) => {
      const { id, userId, title, completed } = todo;

      return `
        <tr>
          <td class="u-tar">${id}</td>
          <td class="u-tar">${userId}</td>
          <td>${title}</td>
          <td class="u-tac">${completed ? "○" : ""}</td>
        </tr>
      `;
    };

    tableBody.insertAdjacentHTML("beforeend", template(todo));
  }
};

/**
 * @description
 * TODO リストを取得して HTML に反映する
 */
const init = () => {
  fetchTodo().then((todoList) => {
    todoList.forEach((todo) => {
      setTableBody(todo);
    });
  });
};

init();
