import React from "react";
import "./App.css";
import { books } from "./Books";

function App() {
  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  const coursedet = (
    <div>
      <h3>Angular</h3>
      <h4>4/5/2021</h4>

      <h3>React</h3>
      <h4>6/3/2020</h4>
    </div>
  );

  const content = (
    <div>
      <h2>React Learning</h2>
      <h5>Stephen B.</h5>
      <p>Welcome to learning React!</p>

      <h2>Installation</h2>
      <h5>Schwadner</h5>
      <p>You can install React from npm.</p>
    </div>
  );

  return (
    <div className="container">

      <div className="box">
        <h1>Course Details</h1>
        {coursedet}
      </div>

      <div className="box">
        <h1>Book Details</h1>
        {bookdet}
      </div>

      <div className="box">
        <h1>Blog Details</h1>
        {content}
      </div>

    </div>
  );
}

export default App;