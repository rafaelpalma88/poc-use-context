import { createContext, ReactNode, useState } from 'react'

interface MenuContextProviderProps {
  children: ReactNode
}

export const MenuContext = createContext({} as any)

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [name, setName ] = useState('Fernanda') 

  return (
    <MenuContext.Provider
      value={{
        name,
        setName
      }}
    >
      { children }
    </MenuContext.Provider>
  )
}