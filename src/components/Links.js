import React from 'react'
import About from './About'

const Links = ( { git, linkedin }) => {


  return (
    <div>
       <h3> <a href= {git} > {git}</a>
       <a href= {linkedin} > {linkedin}</a></h3>
   
    </div>
  )
}

export default Links