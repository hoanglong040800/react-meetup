import { createContext, useState } from 'react'

const defaultValue = {
  favs: [],
  totalFavs: 0,
  addFav: item => {},
  rmFav: rmId => {},
  isFav: findId => {},
}

const FavContext = createContext(defaultValue)

export function FavContextProvider({ children }) {
  const [userFav, setUserFav] = useState([])

  function addFavHandler(item) {
    setUserFav(prevUserFav => {
      return [...prevUserFav, item]
    })
  }

  function rmFavHandler(rmId) {
    setUserFav(prevUserFav => {
      return prevUserFav.filter(item => item.id !== rmId)
    })
  }

  function isFavHandler(findId) {
    return userFav.some(item => item.id === findId)
  }

  const context = {
    favs: userFav,
    totalFavs: userFav.length,
    addFav: addFavHandler,
    rmFav: rmFavHandler,
    isFav: isFavHandler,
  }

  return <FavContext.Provider value={context}>{children}</FavContext.Provider>
}

export default FavContext
