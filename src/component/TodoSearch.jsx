import { Container, Row, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const TodoSearch = () => {
  return (
    <Container>
      <Row className="mt-2">
        <h1 className="text-center">TodoSearch</h1>
      </Row>
      <Row className="mt-1 p-4 border">
        <Row className="col-7 px-0 mx-0">
          <InputGroup className="mb-3 p-0" size="md">
            <Button className="primary" variant="primary" id="button-addon1">
              <FaSearch />
            </Button>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="Search Todo"
            />
          </InputGroup>
        </Row>
        <Row className="justify-content-between px-0 mx-0">
          <Button className="col-7 primary" variant="primary" size="md">
            Search
          </Button>
          <Link to="/add-pages" className="col-2 px-0">
            <Button
              className="container-fluid primary"
              variant="primary"
              size="md"
            >
              Add new Task
            </Button>
          </Link>
        </Row>
      </Row>
    </Container>
  );
};

export default TodoSearch;
