import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignUp from './Components/Signup';
import SignIn from './Components/Signin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
