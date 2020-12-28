import React from "react";

const Book=(props)=>{
    return(
        <div className="column">
            <div className="col s16 m4">
                <div className="card large" >
                    <div className="card-image">
                        {(props.data.volumeInfo.imageLinks == null) ? <img src="https://picsum.photos/200/300" alt="" style={{width:"100", height:"100"}}/> :
                            <img src={props.data.volumeInfo.imageLinks.thumbnail} style={{width:"100",height:"100"}}/>}
                        <span className="card-title">{props.data.volumeInfo.title}</span>
                    </div>
                    <div className="card-content">
                        <div>Author: {props.data.volumeInfo.authors}</div>
                        <div>Genre: {props.data.volumeInfo.categories}</div>
                        <div>Publisher: {props.data.volumeInfo.publisher}</div>
                        <div>Punlished on: {props.data.volumeInfo.publishedDate}</div>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book