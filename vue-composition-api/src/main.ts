import "./style.scss";

type TodoList = Todo[];

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const { createApp, ref } = window.Vue;

/**
 * @description
 * サンプルデータとして TODO リストを取得して JSON を返却する
 */
const fetchTodo = async (): Promise<TodoList> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

createApp({
  setup() {
    const todoList = ref<TodoList>([]);

    /**
     * @description
     * TODO リストを取得してデータに反映する
     */
    const setTodo = (data: TodoList) => {
      todoList.value = data;
    };

    const init = () => {
      fetchTodo().then((todoList) => {
        setTodo(todoList);
      });
    };

    init();

    return {
      todoList,
    };
  },
}).mount("#table");
