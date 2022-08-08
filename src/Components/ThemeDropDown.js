import { useContext } from "react"
import { ThemeContext } from "../Providers/ThemeProvider"

const themes = [
  'onix',
  'houndour'
]

const ThemeDropDown = () =>{
  const {setTheme} = useContext(ThemeContext)
  const Options = ()=>(
    themes.map((theme)=>{
      return(
      <option value={theme} key={theme}>{theme}</option>
      )
    })
  )

    const ChooseTheme =(e)=>{
      console.log(e.target.value)
      setTheme(e.target.value)
      localStorage.setItem('theme', e.target.value)
    }

  return(
    <>
    <select onChange={ChooseTheme}>
      <option value={null}>Choose a Theme</option>
      <Options/>
    </select>
    </>
  )

}

export default ThemeDropDown