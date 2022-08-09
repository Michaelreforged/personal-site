import React, {useState} from "react"


export const ThemeContext = React.createContext()

const ThemeProvider = (props) =>{
  const device = window.matchMedia("(prefers-color-scheme: dark)").matches

  const themeCheck = ()=>{
    if(localStorage.getItem('theme')){
      return localStorage.getItem('theme')
    } else if(device){
      return 'zekrom'
    } else{
      return "onix"
    }
  }
  const [theme, setTheme] = useState(themeCheck())

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export default ThemeProvider