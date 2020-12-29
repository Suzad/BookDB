import axios from "axios"

const googlebookapi=axios.create({
    baseURL:"https://www.googleapis.com/books/v1",
})

const getBooksByTerm=(SearchTerm,setBooks,setTotalPages,pageNumber)=>{
    googlebookapi.get("/volumes",{
        params:{
            q:SearchTerm,
            startIndex:pageNumber,
            maxResults:12,
        }
    }).then((response)=>{
        setBooks(response.data.items)
        setTotalPages(Math.ceil(response.data.totalItems/18))
    })
}

export {getBooksByTerm}