import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompShowBlogs from './blogComponents/ShowBlog';
import CompCreateBlog from './blogComponents/CreateBlog';
import CompEditBlog from './blogComponents/EditBlog';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      <Routes>
        <Route path ='/' element={<CompShowBlogs/>}/>
        <Route path ='/create' element={<CompCreateBlog/>}/>
        <Route path ='/edit/:id' element={<CompEditBlog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
