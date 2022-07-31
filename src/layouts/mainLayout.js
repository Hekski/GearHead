import { Container } from "react-bootstrap"

const MainLayout = (props) => {
  return (
    <Container className="mt-5 mb-5">{props.children}</Container>
  )
}

export default MainLayout;