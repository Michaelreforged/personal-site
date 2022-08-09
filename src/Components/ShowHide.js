import { useState } from "react"

const ShowHide = ({title, children}) =>{
  const [show, setShow] = useState(false)

  return(
    <>
    <h2>{title} Demo</h2>
    <button onClick={()=>setShow(!show)}>{show ? `Hide` : `Show` }</button>
    {show ? children : null}
    </>
  )

}

export default ShowHide