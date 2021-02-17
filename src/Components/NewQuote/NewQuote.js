import React from "react";
import "./NewQuote.css";
import { QUOTES_CATEGORY } from "../../QuotesCategory";

const NewQuote = (props) => {
  const option = QUOTES_CATEGORY.map((category) => {
    return (
      <option
        key={category.id}
        value={category.id}
        defaultValue={props.defValue}
      >
        {category.categName}
      </option>
    );
    //
  });
  return (
    <div>
      <form onSubmit={props.add} className="NewQuote">
        <h3 className="TitleQuote">Submit New Quote</h3>
        <select name="category" onChange={props.change} className="Input">
          {option}
        </select>
        <input
          placeholder="Author"
          className="Input Author-field"
          value={props.author}
          onChange={props.change}
          name="author"
        />
        <textarea
          placeholder="Quote"
          rows="7"
          cols="32"
          className="Input"
          value={props.quoteName}
          onChange={props.change}
          name="quoteName"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewQuote;
