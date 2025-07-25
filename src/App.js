import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';


function App() {
  return (
  
<Router>

<Routes>
 
   <Route path="/signup" element={<Signup />}/>
   <Route path="/login" element={<Login />} />
</Routes>
</Router>

  );
}

export default App;
