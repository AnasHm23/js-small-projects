import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Title />
      <Image />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL900_SR900,600_.jpg"
    alt="Book cover of Onyx Storm"
  />
);
const Title = () => <h2>Onyx Storm</h2>;
const Author = () => {
  return <h4>Rebecca Yarros</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

export default BookList;
