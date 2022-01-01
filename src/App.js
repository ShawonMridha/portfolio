import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Links from './components/Links/Links';
import Details from './components/Details/Details';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import MyProjects from './components/MyProjects/MyProjects';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Links></Links>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="blog" element={<Blog />} />
      <Route path="myProjects" element={<MyProjects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
