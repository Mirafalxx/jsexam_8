import React from "react";
import "./DisplayQuote.css";

const DisplayQuote = (props) => {
  return (
    <div className="QuoteForm">
      <div className="Quote">
        <p>
          <b className="category">Category: {props.quoteCategory}</b>
        </p>
        <p className="titleQuote">Title: {props.quoteName}</p>
        <p className="quoteAuthor">Author: {props.quoteAuthor}</p>
        <button className="quoteButton" onClick={props.editQuote}>
          Edit
        </button>
        <button className="quoteButton" onClick={props.deleteQuote}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default DisplayQuote;
