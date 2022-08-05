import { Container } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const MainLayout = (props) => {
  return (
    <div className="bg-dark">
      <Container>
        {props.children}
        <ToastContainer />
      </Container>
    </div>
  );
}

export default MainLayout;