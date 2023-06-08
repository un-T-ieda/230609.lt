import "./style.scss";

type TodoList = Todo[];

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const vue = window.Vue;

vue
  .createApp({
    data() {
      return {
        todoList: [] as TodoList,
      };
    },
    methods: {
      /**
       * @description
       * サンプルデータとして TODO リストを取得して JSON を返却する
       */
      fetchTodo: async (): Promise<TodoList> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        return await res.json();
      },
    },
    created() {
      // options API の記法だと型推論がうまく効かない
      // @ts-ignore
      this.fetchTodo().then((res) => {
        this.todoList = res;
      });
    },
  })
  .mount("#app");
