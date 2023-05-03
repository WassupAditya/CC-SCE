import React from 'react'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const filters = ({setStatus , setPageNumber, setGender , setSpecies}) => {
  let clear = ()=>{
    setStatus("") 
    setPageNumber("")
     setGender("") 
      setSpecies("")
      window.location.reload(false)
  }
  return (
    <div className="col-lg-3 col-12 mb-5">

      <div className='text-center fw-bold fs-4 mb-2' >filter</div>
      <div onClick={clear}
       style={{ cursor: "pointer" }} className="text-center text-decoration-underline text-primary mb-4 ">Clear Filters</div>



      <div className="accordion" id="accordionExample">

      <Status setPageNumber= {setPageNumber} setStatus= {setStatus}/>
      <Species setPageNumber= {setPageNumber} setSpecies={setSpecies}/>
      <Gender setGender = {setGender} setPageNumber= {setPageNumber}/>
      
      
      </div>
    </div>
  )
}

export default filters