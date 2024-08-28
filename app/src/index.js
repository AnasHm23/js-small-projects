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
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleInputform = () => {
    console.log("handle the input form");
  };
  const handleButton = () => {
    alert("the button was clicked");
  };
  return (
    <section>
      <form action="">
        <h2>typical form</h2>
        <input
          type="text"
          name="input field"
          onChange={handleInputform}
          style={{ margin: "5px 10px 20px 0" }}
        />
        <button onClick={handleButton}>Click me</button>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { title, img, author, id, getBook } = props;
  return (
    <article className="book">
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
