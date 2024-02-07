
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import {useSelector} from 'react-redux'
import Navbar from './components/Navbar';

function App() {  
  // const data=useSelector(state=>state.postsList);
  // console.log(data)
  return(
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favourites' element={<Favourites />} />
    </Routes>
    </>
  )
}

export default App
