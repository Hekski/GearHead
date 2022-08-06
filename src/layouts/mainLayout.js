import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const MainLayout = (props) => {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="mainContainer">
        <Container>
          {props.children}
          <ToastContainer />
        </Container>
      </div>
    </div>
  );
};

export default MainLayout;
