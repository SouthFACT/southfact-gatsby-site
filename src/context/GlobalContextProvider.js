import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

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

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider