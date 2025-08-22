import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url)
  .then(response => {
    const todo = response.data as Todo;

    logTodo(todo);
  });

const logTodo = (todo: Todo): void => {
  console.log(`
      Todo ID: ${todo.id}
      Title: ${todo.title}
      Completed: ${todo.completed}`);
}