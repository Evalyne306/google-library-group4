import React from "react";

function Card({book}) {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        return (
          <div className="card">
            <img src={thumbnail} alt="" />
            <div className="bottom">
              <h3 className="title">REACT</h3>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Card;
