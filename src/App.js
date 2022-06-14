import Home from './HomePage.js';
import JoinTheGym from './JoinTheGym.js';
import MemberScreen from "./MemberScreen.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/JoinTheGym' element={<JoinTheGym />}/>
            <Route path='/MemberScreen' element={<MemberScreen/>}/>
          </Routes>
        </Router>
 
 
      
  
    </div>
  );
}

export default App;
