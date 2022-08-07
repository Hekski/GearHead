import { useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToNewsLetter } from "../../store/utils/thunks";
import { showToast } from "./tool";

const NewsLetter = () => {
  const textInput = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    console.log(value);

    dispatch(addToNewsLetter({ email: value }))
      .unwrap()
      .then((response) => {
        if (response.newsletter === "added") {
          showToast("success", "Added!");
          textInput.current.value = "";
        }
        if (response.newsletter === "failed") {
          showToast("error", "Already subscribing!");
          textInput.current.value = "";
        }
      });
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
