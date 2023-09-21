import { Container } from "react-bootstrap";
import TodoInput from "../component/TodoInput";
import todos from "../data/data.json";
import { useState } from "react";

const AddPages = () => {
  const [todo, setTodo] = useState(todos);

  return (
    <Container className="col-10">
      <TodoInput todo={todo} setTodo={setTodo} />
    </Container>
  );
};

export default AddPages;
