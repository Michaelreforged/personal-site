import { useContext } from "react"
import { ThemeContext } from "../Providers/ThemeProvider"

const themes = [
 {disabled:true, value:'',text:'Choose a Theme'},
 {value:'light',text:'Light'},
  {value:'onix', text:'Onix'},
  {value:'zekrom',text:'Zekrom'},
  {value:'slate',text:'Slate'},
]

const ThemeDropDown = () =>{
  const {theme, setTheme} = useContext(ThemeContext)
  const Options = ()=>(
    themes.map(({value,text,disabled})=>{
      return(
      <option disabled={disabled} value={value} key={value}>{text}</option>
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
    <select value={theme} onChange={ChooseTheme}>
      <Options/>
    </select>
    </>
  )

}

export default ThemeDropDown