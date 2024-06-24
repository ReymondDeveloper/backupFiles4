
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './components/Home';
import AddClient from './client/AddClient'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditClient from './client/EditClient';
import ViewClient from './client/ViewClient';

function App() {
  
  return (
    <div className='App' >
      <Router>
          <Navbar/>
              <Routes>
                    <Route exact path='/' element={<Home/>} />               
                    <Route exact path='/AddClient' element={<AddClient/>} />
                    <Route exact path='/editclient/:id' element={<EditClient/>} />
                    <Route exact path="/viewclient/:id" element={<ViewClient/>}/>
              </Routes> 
          
      </Router>
    </div>
  )
}

export default App
