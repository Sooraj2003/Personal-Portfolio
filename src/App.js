
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    {/* <a href="https://iconscout.com/icons/html5" target="_blank">Html5 Icon</a> by <a href="https://iconscout.com/contributors/unicons" target="_blank">Unicons Font</a> */}
    </>
  );
}

export default App;
