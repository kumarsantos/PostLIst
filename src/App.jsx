
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import {useSelector} from 'react-redux'

function App() {  
  const data=useSelector(state=>state.postsList);
  console.log(data)
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favourites' element={<Favourites />} />
    </Routes>
  )
}

export default App
