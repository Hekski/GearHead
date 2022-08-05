import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
import MissingPage from "./components/404";
import Contact from "./components/contact";
import PostsComponent from "./components/posts";
import Footer from "./components/footer/footer"


import Header from "./components/header/header";
import MainLayout from "./layouts/mainLayout"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="article/:id" element={<PostsComponent />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<MissingPage />}></Route>
        </Routes>
      </MainLayout>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
