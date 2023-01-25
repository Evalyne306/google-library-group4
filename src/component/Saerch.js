import React, { useState } from 'react'; 
import axios from 'axios';
import { Card } from 'react';


function GoogleBooksSearch() {
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    // const [apiKey, setApiKey] = useState("AIzaSyCOhN0ES6a-EiNQJcQT3k3PD7gesNE2UuA")  
  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAjZWyDs6UhdbgEcGSH-qn7033uGstW5yc")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  
    return (  
        <form onSubmit={handleSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            <div className="container">  
                <div className="row">  
                    {result.map(book => (  
                        <div className="col-sm-2">  
                            <Card style={{ 'marginTop': '10px' }}>  
  
                                <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                                <Card.Body>  
                                    <h5 className="card-title">Card title</h5>  
                                    <a className="btn btn-primary">Know more</a>  
                                </Card.Body>  
                            </Card>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </form>  
  
    )  
}  
  
export default GoogleBooksSearch


// import React from "react";

// `https://picsum.photos/v2/?=${query}`


// const [query, setQuery] = useState("");
// const [data, setData] = useState([]);

// // Add one more state to store the authors being searched for
// const [searchResults, setSearchResults] = useState([]);

// useEffect(() => {
//         const fetchData = async () => {
//             const res = await axios.get(`https://picsum.photos/v2/list`);
//             setData(res.data);
//         };
//         fetchData();
//     }, []);

// // Query that handles searching
// useEffect(() => {
//   setSearchResults(data.filter((authorData) => authorData['author'].toLowerCase().includes(query)));
// }, [query, data]);

//     return (
//         <div className="app">
//             <input
//                 className="search"
//                 placeholder="Search..."
//                 onChange={(e) => setQuery(e.target.value.toLowerCase())}
//             />
//             <div>{searchResults}</div>
//         </div>
//     );

//   export default Search