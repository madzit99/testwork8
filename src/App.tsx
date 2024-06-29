import { Routes } from 'react-router-dom'
import './App.css'
import Toolbar from './Components/Toolbar/Toolbar'

function App() {

  return (
    <div className="app-container">
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          
        </Routes>
      </main>
    </div>
  );
}

export default App
