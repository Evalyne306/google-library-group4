import axios from "axios";
import React,{useState} from "react";
import Card from "./BookCard";


export default function Main(){
    const[search, setSearch]= useState("");
const[bookData, setData]= useState([]);
const searchBook=(event)=>{
    if(event.key==="Enter"){

        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCqOKrqzMnQR7vgAcnOFa4WcfUD9djIuX4'+'&maxResults=40')
        .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="header">
            <div className="search">
                <input type="text" placeholder="Enter your book name" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
<button>button</button>
            </div>
            <img src="" alt=""/>
        </div>
        <div className="container">
          {
 <Card book={bookData}/>
          }
           
        </div>
        </>
    )
}