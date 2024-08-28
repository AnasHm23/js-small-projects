import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Onyx Storm",
    img: "https://m.media-amazon.com/images/I/9101MLPcFTL._SY522_.jpg",
    author: "Rebecca Yarros",
    id: 1,
  },
  {
    title: "It Starts with Us",
    img: "https://m.media-amazon.com/images/I/71PNGYHykrL._SY522_.jpg",
    author: "Colleen Hoover",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1 className="title">Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} index={index} />
          );
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { title, img, author, id, getBook, index } = props;
  return (
    <article className="book">
      <span>{`#${index + 1}`}</span>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Get book</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
