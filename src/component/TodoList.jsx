import { Container, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TodoList = (props) => {
  const { todoView, setTodoView } = props;

  const handleTodoView = (e) => {
    setTodoView(e);
  };

  return (
    <Container>
      {/* {console.log(setTodoView)} */}
      <Row className="mt-4">
        <h2 className="text-center">TodoList</h2>
      </Row>
      <Row className="mt-1 justify-content-between sm ">
        <Link to="/" className="col px-0 mx-2">
          <Button
            className="container-fluid primary"
            variant="primary"
            size="md"
            onClick={() => handleTodoView("all")}
          >
            All
          </Button>
        </Link>
        <Link to="/completed" className="col px-0 mx-2">
          <Button
            className="container-fluid primary"
            variant="primary"
            size="md"
            onClick={() => handleTodoView("done")}
          >
            Done
          </Button>
        </Link>
        <Link to="/uncompleted" className="col px-0 mx-2">
          <Button
            className="container-fluid primary"
            variant="primary"
            size="md"
            onClick={() => handleTodoView("todo")}
          >
            Todo
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

TodoList.propTypes = {
  todoView: PropTypes.string,
  setTodoView: PropTypes.func,
};

export default TodoList;
