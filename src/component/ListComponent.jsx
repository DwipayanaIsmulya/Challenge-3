import { Container, Row, Col, Button } from "react-bootstrap";
import { FaTrash, FaPen } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

const ListComponent = (props) => {
  const { todos, setTodo, todoView } = props;

  // const check = todos.map((event) => event.complete);

  const [checked, setChecked] = useState(
    new Array(todos.length).fill(todos.map((todo) => todo.complete))
  );

  const handleDeleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodo(deleteTodo);
  };

  const handleCheckList = (id) => {
    const changeCheckList = checked.map((item, index) =>
      index + 1 === id ? !item : item
    );
    // const getCheck = checked.map((e) => e);
    // const check = getCheck.map((e) => e);
    setChecked(changeCheckList);
    // console.log(checked[0][id - 1]);
    // console.log(id);
    // console.log(changeCheckList);
    // console.log(todos);
    // console.log(id)
  };

  return (
    <Container className=" mt-4">
      {/* {console.log(todoView)} */}
      {todos.map((item, index) => (
        <Row className="mt-2 p-3 border justify-content-between" key={index}>
          <Col xs="6" className="">
            {checked[0][item.id - 1] === true ? (
              <h5 className="mb-0 py-2 complete">{item.task}</h5>
            ) : (
              <h5 className="mb-0 py-2">{item.task}</h5>
            )}
          </Col>
          {console.log(checked[0])}
          <Col xs="2">
            <Row className="justify-content-evenly">
              <Col xs="2" className="px-0">
                <Button
                  className="warningPen d-flex"
                  variant=""
                  id="button-addon1"
                >
                  <input
                    className="checkBox my-1"
                    type="checkbox"
                    checked={checked[0][item.id - 1]}
                    onChange={() => handleCheckList(item.id)}
                  />
                </Button>
              </Col>
              <Col xs="2" className="px-0">
                <Button className="warningPen" variant="" id="button-addon1">
                  <FaPen />
                </Button>
              </Col>
              <Col xs="2" className="px-0">
                <Button
                  className="dangerTrash"
                  variant=""
                  id="button-addon1"
                  onClick={() => handleDeleteTodo(item.id)}
                >
                  <FaTrash />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

ListComponent.propTypes = {
  todoView: PropTypes.string,
  todos: PropTypes.array,
  setTodo: PropTypes.func,
};

export default ListComponent;
