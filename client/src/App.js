import logo from './logo.svg';
import './App.css';
import  Header from './components/header/Header';
import img1 from './1.jpeg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import Mainhome from './components/mainhome/Mainhome';
import About from './components/about/About';
import Articlelist from './components/article/Articlelist';
import Article from './components/article/Article';
import Error from './components/error/Error';
import Adminhome from './components/admin/Adminhome';
import Addblog from './components/admin/Addblog';
import Blog from './components/admin/Blog';
import Editform from './components/admin/Editform';
import Articledata from './components/admin/Articledata';
import Adminlogin from './components/login/Adminlogin';

function App() {
  return (
   <div className="mainapp">
      
     <BrowserRouter>
     
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/adminlogin" element={<Adminlogin/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mainhome" element={<Mainhome/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/articlelist" element={<Articlelist/>}></Route>
        {/* <Route path="/article/:name" element={<Article/>}></Route> */}
        <Route path="*" element={<Error/>}></Route>
        <Route path="/adminhome" element={<Adminhome/>}></Route>
        <Route path="/addblog" element={<Addblog/>}></Route>
        <Route path="/admin/article/:_id" element={<Blog/>}></Route>
         <Route path="/:_id/editform" element={<Editform/>}></Route>
         <Route path="/articledata" element={<Articledata/>}></Route>
         <Route path="/user/article/:_id" element={<Article/>}></Route>

     </Routes>
     </BrowserRouter> 
   </div>
  );
}

export default App;
