import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import Counter from './Counter'
import Hooks from './Hooks'
import Dosum from './dosum'
import EventDemo from './EventDemo'
function App(){
  return (<div>
    <h1>MyApp</h1>
    <Router>
      <Link to='/home'>Home</Link>|
      <Link to='/about'>About</Link>|
      <Link to='/contact'>Contact</Link>|
      <Link to='/counter'>Counter</Link>|
      <Link to='/hooks'>Hooks</Link>|
      <Link to='/dosum'>Dosum</Link>|
      <Link to='/eventdemo'>EventDemo</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/dosum' element={<Dosum/>}/>
        <Route path='/eventdemo' element={<EventDemo/>}/>
        <Route path='/cake/rajkot' element={<h1>Rajkot cake</h1>}/>
        <Route path='/cake/ahmedabad' element={<h1>Ahmedabad cake</h1>}/>
        <Route path='*' element={<h1>404 File Not Found</h1>}/>
      </Routes>
    </Router>
  </div>)
}
export default App