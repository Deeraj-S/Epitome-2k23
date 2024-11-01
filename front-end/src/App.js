import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/Signup';
import SignIn from './Components/Signin';
import ForgotPass from './Components/ForgotPass';
import ChangePass from './Components/ChangePass';
import Registration from './Components/Registration';
import Events from './Components/Event';
import About from './Components/About';
import Schedule from './Components/Schedule';
import EventRules from './Components/EventRules';
import Helpdesk from './Components/Helpdesk';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/forgotpass' element={<ForgotPass />}></Route>
          <Route path='/newpass' element={<ChangePass />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Registration' element={<Registration />}></Route>
          <Route path='/Events' element={<Events />} ></Route>
          <Route path='/Schedule' element={<Schedule />}></Route>
          <Route path='/Help-Desk' element={<Helpdesk />}></Route>
          <Route path='/event-rules' element={<EventRules />}></Route>
          <Route path='/event-rules/:id' element={<EventRules />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
