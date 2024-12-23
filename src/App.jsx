import { useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero />
      <Menu />
    </div>
  )
}

export default App
