import { Home } from './components/Home'
import { About } from './components/About'
import { useState } from 'react'
import { MenuContext } from './context/MenuContext'

function App() {

  const [name, setName ] = useState('Fernanda') 

  return (
    <div className="App">
      <MenuContext.Provider value={{ name, setName }}>
        <About />
        ******
        <Home />
      </MenuContext.Provider>
    </div>
  )
}

export default App
