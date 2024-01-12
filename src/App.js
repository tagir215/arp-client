import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GridPage from './pages/GridPage';
import CartPage from './pages/CartPage';
import RegistrationPage from './pages/RegistrationPage';
import UserPage from './pages/UserPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App bg-background">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/grid" element={<GridPage/>}></Route>
          <Route path="/cart" element = {<CartPage/>}></Route>
          <Route path="/registration" element = {<RegistrationPage/>}></Route>
          <Route path="/user" element = {<UserPage/>}></Route>
          <Route path="/about" element = {<AboutPage/>}></Route>
          <Route path="/contact" element = {<ContactPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
