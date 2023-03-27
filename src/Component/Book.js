import { fontSize } from '@mui/system'
import React from 'react'
function Book(props) {
  const sty={
    color:'blue',
    fontSize:'30px'
  }
  return (
    <div style={sty}>Book Name:{props.name}|Author:{props.author}
    <h1 className='prime'>{props.children}</h1>
    </div>
  )
}
export default Book