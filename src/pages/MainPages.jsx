import { Container } from "react-bootstrap";
import TodoSearch from "../component/TodoSearch";
import TodoList from "../component/TodoList";
import ListComponent from "../component/ListComponent";
import DeleteComponent from "../component/DeleteComponent";
import todos from "../data/data.json";
import { useState } from "react";

const MainPages = () => {
  const [todo, setTodo] = useState(todos);
  const [todoView, setTodoView] = useState("all");

  return (
    <Container>
      {/* {console.log(todoView)} */}
      <TodoSearch />
      <TodoList todoView={todoView} setTodoView={setTodoView} />
      <ListComponent todos={todo} setTodo={setTodo} todoView={todoView} />
      <DeleteComponent todos={todo} setTodo={setTodo} />
    </Container>
  );
};

export default MainPages;
