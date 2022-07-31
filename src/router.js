import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <div className="App">
          <header>
            Header
            <hr />
          </header>
          <main>
            Main page
            <hr />
          </main>
        </div>
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
