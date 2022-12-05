import './App.css';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import LandingPage from './components/LandingPage/LandingPage';
import Error404 from './components/Error404/Error404';
import CreateDog from './components/CreateDog/CreateDog';
import { Route, BrowserRouter, Routes } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/create-dog" element={<CreateDog></CreateDog>}></Route>
          <Route exact path="/dog/:name" element={<Detail></Detail>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
//<Route path="*" component={ Error404 } />
