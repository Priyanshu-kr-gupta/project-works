import './App.css';
import Home from './components/home';
import {
  Route,
  Routes,
} from "react-router-dom";
import LoginForm from './components/loginform.js';
import Signup from './components/signup.js';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

function App() {
  return (
 <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<LoginForm />}/>
    <Route path='/signup' element={<Signup />}/>
 </Routes>
  );
}

export default App;