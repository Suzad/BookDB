import React,{useState} from "react"
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import {getBooksByTerm} from "./api/googlebookapi";
import Booklist from "./components/Booklist";
import Pagination from "./components/Pagination";

const App=()=>{
    const [searchTerm,setSearchTerm]=useState("")
    const [books,setBooks]=useState([])
    //const [currentPage,setCurrentPage]=useState(0)
    //const [totalPages,setTotalPages]=useState(0)

    const handleSubmit=async(event)=>{
        event.preventDefault()
        await getBooksByTerm(searchTerm,setBooks/*,setTotalPages*/)
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
            {/*{totalPages>1?<Pagination/>:""}*/}
        </div>
    )
}

export default App