import React from "react"

export const NavStateContext = React.createContext()
export const NavDispatchContext = React.createContext()

const initialState = {
  activeTab: "home",
}

function reducer(state, action) {
  switch (action.type) {
    case "TAB_HOME": {
      return {
        ...state,
        activeTab: 'home',
      }
    }
    case "TAB_LEARN": {
      return {
        ...state,
        activeTab: 'learn',
      }
    }
    case "TAB_CONTACT": {
      return {
        ...state,
        activeTab: 'contact',
      }
    }
    case "TAB_MAP": {
      return {
        ...state,
        activeTab: 'map',
      }
    }
    case "TAB_CUSTOM_REQUEST": {
      return {
        ...state,
        activeTab: 'custom request',
      }
    }
    default: {
      return {
        ...state,
        activeTab: 'home',
      }
    }
  }
}

const NavContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <NavStateContext.Provider value={state}>
      <NavDispatchContext.Provider value={dispatch}>
        {children}
      </NavDispatchContext.Provider>
    </NavStateContext.Provider>
  )
}

export default NavContextProvider