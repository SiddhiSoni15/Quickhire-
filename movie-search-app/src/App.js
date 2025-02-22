import Result from "./components/Result";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Search from "./Search";

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
    const[state,setState]=useState ({
      search:'',
      results:[]
    }) 

    const handleInput=(event)=>{
      let search=event.target.value;
      setState((prevState)=>{
        return {...prevState,search:search}
      })
    }

    const SearchResult=(event)=>{
      if(event.key==="Enter"){
        axios.get(" http://www.omdbapi.com/?i=tt3896198&apikey=12445788")
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      }
    }

  return (
    <div className="w-100 main-wrapper d-flex flex-column align-items-center justify-content-center">
      <header className="w-100 text-center text-white mt-5">
        <h2>Movie Search</h2>
        <Search handleInput={handleInput} SearchResult={SearchResult}/>

      </header>
    </div>
  );
}

export default App;