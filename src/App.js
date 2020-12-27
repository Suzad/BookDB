import React,{useState} from "react"
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import {getBooksByTerm} from "./api/googlebookapi";
import Booklist from "./components/Booklist";

const App=()=>{
    const [searchTerm,setSearchTerm]=useState("")
    const [books,setBooks]=useState([])

    const handleSubmit=async(event)=>{
        event.preventDefault()
        await getBooksByTerm(searchTerm,setBooks)
        console.log(books)
    }

    const handleChange=(event)=>{
        setSearchTerm(event.target.value)
    }

    return(
        <div>
            <Navbar/>
            <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Booklist books={books}/>
        </div>
    )
}

export default App