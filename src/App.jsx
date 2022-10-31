import './App.css';
import Todo from './pages/todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/products';
import Header from './components/Header';
function App() {

  return (
    <>
      <BrowserRouter>
        <div class="h-screen w-full flex overflow-hidden">
          <Header />
          <Routes>
            <Route exact path="/" element={<Todo />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
