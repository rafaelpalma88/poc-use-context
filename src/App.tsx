import { Home } from './components/Home'
import { About } from './components/About'
import { MenuContextProvider } from './context/MenuContext'

function App() {

  return (
    <div className="App">
      <MenuContextProvider>
        <About />
        ******
        <Home />
      </MenuContextProvider>
    </div>
  )
}

export default App
