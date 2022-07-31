import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
import MissingPage from "./components/404";
import Contact from "./components/contact";
import PostsComponent from "./components/posts";

import Header from "./components/header/header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article/:id" element={<PostsComponent />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<MissingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
