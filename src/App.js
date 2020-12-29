import React,{useState} from "react"
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import {getBooksByTerm} from "./api/googlebookapi";
import Booklist from "./components/Booklist";
import Pagination from "./components/Pagination";

const App=()=>{
    const [searchTerm,setSearchTerm]=useState("")
    const [books,setBooks]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [totalPages,setTotalPages]=useState(0)

    // useEffect(async () => {
    //     if (searchTerm != null) {
    //         await nextPage(currentPage);
    //     }
    // }, []);

    const handleSubmit=async(event)=>{
        event.preventDefault()
        await getBooksByTerm(searchTerm,setBooks,setTotalPages,currentPage)
        //console.log(books)
    }

    const handleChange=(event)=>{
        setSearchTerm(event.target.value)
    }

    const nextPage = async (pageNumber) => {
        setCurrentPage(pageNumber);
        await getBooksByTerm(searchTerm, setBooks, setTotalPages, currentPage);
    }

    return(
        <div>
            <Navbar/>
            <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Booklist books={books}/>
            {totalPages>1?<Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages}/>:""}
        </div>
    )
}

export default App