import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import Episodes from './Pages/Episodes';
import {BrowserRouter as Router , Routes  , Route} from 'react-router-dom' ;
import Location from './Pages/Location'; 
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<CardDetails/>} />
        <Route path="/episodes" element={<Episodes/>} />
        <Route path="/episodes/:id" element={<CardDetails/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/location/:id" element={<CardDetails/>} />
      </Routes>
    </Router>
  )
}


const  Home = () => {
  
  //pageNumber variable aahe  ani setPageNumber funtion aahe
  let [pageNumber, setPageNumber] = useState(1); //  1 page default asnar aahe

  let [search , setSearch] = useState("")

  let [fetchData, updateFetchData] = useState([]); // this will store the character info;
  // destructuring

  // filter hooks 
  let [status , setStatus] = useState("")

  let [gender , setGender] = useState("") ; 

  let [species , setSpecies] = useState("")
  //
  let { info, results } = fetchData;

  // console.log(results) ; 

  // console.log(fetchData.results) <= instead of using this we use destructureing 
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`; // stroed in template litteral

  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json()); // await : wait kar toparyant jo paryant data fectch nahi hot
      updateFetchData(data)
    })();

  }, [api])


  return (
    <div  className="App">
      <h1 className="text-center mb-4">Characters</h1>
      
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
          
            <Filters setStatus = {setStatus} setPageNumber = {setPageNumber} setGender= {setGender} setSpecies={setSpecies}/>
         
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination info= {info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
