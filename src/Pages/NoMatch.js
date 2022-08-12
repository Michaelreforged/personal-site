import React from "react"
import {useLocation} from "react-router"

const NoMatch = () =>{
  const loc = useLocation();

  return(
    <div>
      <h1>No match for {loc.pathname}</h1>
    </div>
  )

}
export default NoMatch