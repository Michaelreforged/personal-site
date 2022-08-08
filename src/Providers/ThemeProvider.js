import React, {useState} from "react"


export const ThemeContext = React.createContext()

const ThemeProvider = (props) =>{
  
  const [theme, setTheme] = useState(localStorage.getItem('theme')||"onix")

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export default ThemeProvider