import axios from "axios"

const googlebookapi=axios.create({
    baseURL:"https://www.googleapis.com/books/",
})

const getBooksByTerm=(SearchTerm,setBooks,setTotalPages)=>{
    googlebookapi.get("/v1/volumes",{
        params:{
            q:SearchTerm,
            //page number will be here
        }
    }).then((response)=>{
        console.log(response.data)
        setBooks(response.data.items)
        //setTotalPages(response.data.totalItems/10)
    })
}

export {getBooksByTerm}