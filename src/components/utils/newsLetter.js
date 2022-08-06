import { useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const NewsLetter = () => {
  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    console.log(value);
  };

  return (
    <div className="container">
      <div className="form">
        <Form onSubmit={handleSubmit} className="d-flex">
          <Form.Group>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="Join our newsletter"
              name="email"
              ref={textInput}
            />
          </Form.Group>
          <Button className="btn-warning bg-gradient rounded-0" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewsLetter;
