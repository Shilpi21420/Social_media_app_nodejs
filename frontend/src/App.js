import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/post' element={<Post />}></Route>
    </Routes>
   </Router>
  );
}

export default App;
