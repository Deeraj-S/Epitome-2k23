import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/Signup';
import SignIn from './Components/Signin';
import ForgotPass from './Components/ForgotPass';
import ChangePass from './Components/ChangePass';
import Registration from './Components/Registration';
import Events from './Components/Event';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/forgotpass' element={<ForgotPass />}></Route>
          <Route path='/newpass' element={<ChangePass />}></Route>
          <Route path='/Registration' element={<Registration />}></Route>
          <Route path='/events' element={<Events />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
