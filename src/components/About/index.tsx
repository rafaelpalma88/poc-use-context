import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

export function About() {

  const { name, setName} = useContext(MenuContext)

  function changeName() {
    setName('Juliana')
  }

  return (
    <div>
      Name: { name } 
      <button onClick={changeName}>Mudar nome pra Juliana</button>
    </div>
  )
}
