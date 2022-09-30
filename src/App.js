import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
