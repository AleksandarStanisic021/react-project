export default function Todo() {
  const todos = [
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn JavaScript",
    },
    {
      id: 3,
      title: "Learn CSS",
    },
    {
      id: 4,
      title: "Learn HTML",
    },
  ];

  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
