import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import ListaUsuariosPage from './pages/ListaUsuariosPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cadastro' element={<CadastroPage/>}/>
          <Route path='/listaUsuarios' element={<ListaUsuariosPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App