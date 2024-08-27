import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  title: "Onyx Storm",
  img: "https://m.media-amazon.com/images/I/9101MLPcFTL._SY522_.jpg",
  author: "Rebecca Yarros",
};
const secondBook = {
  title: "It Starts with Us",
  img: "https://m.media-amazon.com/images/I/71PNGYHykrL._SY522_.jpg",
  author: "Colleen Hoover ",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <h2>{props.title}</h2>
      <img src={props.img} alt={props.title} />
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
