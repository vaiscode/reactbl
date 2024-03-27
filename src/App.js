import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Login/>}></Route>
        <Route path={'/signup'} element={<Signup/>}></Route>
        <Route path={'/blogs'} element={<Main child={<Blogs/>}/>}></Route>
        <Route path={'/add'} element={<Main child={<AddBlog/>}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
