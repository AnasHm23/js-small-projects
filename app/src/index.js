import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const title = "Onyx Storm";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL900_SR900,600_.jpg";
const author = "Rebecca Yarros";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
