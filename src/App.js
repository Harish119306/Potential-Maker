
import './App.css';
// import Homepage from './components/homepage/homepage';
// import Login from './components/login/login';
// import Register from './components/register/register';
// import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Landing from './components/Landing';

function App() {


  return (
    <div className="App">
      
     <Landing/>
{/*      
    <Router>
        <Routes>
          <Route exact path='/'element={
              user&& user._id ? <Homepage/>: <Login setLoginUser={setLoginUser}/>}>
          
          </Route>
          <Route path='/login'element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path='/register'element={<Register/>}/>
        </Routes>
    </Router> 
     */}
    </div>
  );
}

export default App;
