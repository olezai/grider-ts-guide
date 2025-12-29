import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// object shape that we receive from the server
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

// easy to make a mistake with response properties
  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});
