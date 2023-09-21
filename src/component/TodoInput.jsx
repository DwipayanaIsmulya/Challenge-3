import { Container, Row, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

const TodoInput = (props) => {
  const { todo, setTodo } = props;
  const [name, setName] = useState("");

  const handleAddTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      complete: false,
    };

    setTodo([newTodo, ...todo]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("cek");

    handleAddTodo(name);
    setName("");
  };

  return (
    <Container className="col-10">
      <Row className="mt-2">
        <h1 className="text-center">TodoInput</h1>
      </Row>
      <Row className="mt-1 p-4 border">
        <form action="" onSubmit={handleSubmit}>
          <Row className=" px-0 mx-0">
            <InputGroup className="mb-3 p-0" size="md">
              <Button className="primary" variant="primary" id="button-addon1">
                <FaBook />
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Input/Edit Todo"
              />
            </InputGroup>
          </Row>
          <Row className="justify-content-between px-0 mx-0">
            <Link to="/add-pages" className=" px-0">
              <Button
                className="container-fluid primary"
                variant="primary"
                size="md"
              >
                Submit
              </Button>
            </Link>
          </Row>
        </form>
      </Row>
    </Container>
  );
};

TodoInput.propTypes = {
  todo: PropTypes.array,
  setTodo: PropTypes.func,
};

export default TodoInput;
