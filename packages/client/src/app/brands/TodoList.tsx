type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const TodoList = async () => {
  const data: Todo[] = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();
  const todos = data.slice(0, 5);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} style={{ border: `1px solid black` }}>
          <h4>{todo.title}</h4>
          <p>{todo.completed ? "Completed" : "Not completed"}</p>
        </div>
      ))}
    </>
  );
};
