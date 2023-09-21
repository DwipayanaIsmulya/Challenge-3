import { Container, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DeleteComponent = (props) => {
  const { todos, setTodo } = props;

  const handleDeleteAll = () => {
    setTodo([]);
  };

  const handleDeleteDoneTasks = () => {
    const deleteTodo = todos.filter((todo) => todo.complete !== true);
    setTodo(deleteTodo);
  };

  return (
    <Container className=" mt-4 mb-4">
      <Row className="justify-content-between">
        <Button
          className="col mx-2"
          variant="danger"
          onClick={() => handleDeleteDoneTasks()}
        >
          Delete done tasks
        </Button>
        <Button
          className="col mx-2"
          variant="danger"
          onClick={() => handleDeleteAll()}
        >
          Delete all tasks
        </Button>
      </Row>
    </Container>
  );
};

DeleteComponent.propTypes = {
  todos: PropTypes.array,
  setTodo: PropTypes.func,
};

export default DeleteComponent;
