import React from 'react'
import Episodes from '../../../Pages/Episodes'
const Inputgroup = ({total , name , setID}) => {

  return (
    <div><div class="input-group mb-3">
    
    <select
    onChange={(e)=>setID(e.target.value)}
    class="form-select" id={name}>

      <option value="1" selected>Choose...</option>
      {[...Array(total).keys()].map(x=>{
        return <option value={x+1}>{name} - {x+1}</option>
      })}
      
    </select>
  </div>
  </div>    
  )
}

export default Inputgroup