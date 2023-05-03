import React , { useState ,useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import Inputgroup from '../components/Filters/category/Inputgroup';
const Episodes = () => {
  let [id , setID] = useState(1);
  let [info ,setInfo] = useState([]);
  let [results , setResults] = useState([])
  let {air_date, name} = info
  let api =  `https://rickandmortyapi.com/api/episode/${id}`
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setInfo(data) ;
      let aditya = await Promise.all(
        data.characters.map((x)=>{
          return fetch(x).then(res=>res.json()) ;
        })
      )
      setResults(aditya) ;
    })()
  },[api])
  return (
    <div className='container'>
        <div className="row mb- ">
        <h1 className="text-center mb-4">
        Episode : {" "}
        <span className="text-primary">{name===""? "Unknown" :name}</span>
         
          </h1>              
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}</h5>              
        </div>
        <div className="row">
          <div className="col-lg-3 col-12">
            <h4 className='text-center mb-4'>Pick Episode</h4>
            <Inputgroup setID={setID} name="Episode" total = {51}/>
          </div>
          
          <div className="col-lg-8 col-12">
            <div className="row">
            <Cards page="/episodes/" results={results}/>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Episodes