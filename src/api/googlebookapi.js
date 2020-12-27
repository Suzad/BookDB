import axios from "axios"

const googlebookapi=axios.create({
    baseURL:"https://www.googleapis.com/books/",
})

const getBooksByTerm=(SearchTerm,setBooks)=>{
    googlebookapi.get("/v1/volumes",{
        params:{
            q:SearchTerm,
        }
    }).then((response)=>{
        console.log(response.data)
        setBooks(response.data.items)
    })
}

export {getBooksByTerm}