import React, { useState } from "react";
import NewQuote from "../../Components/NewQuote/NewQuote";
import axiosQuoteURL from "../../axiosQuoteURL";
import { QUOTES_CATEGORY } from "../../QuotesCategory";

const AddQuote = (props) => {
  const [quote, SetQuote] = useState({
    category: QUOTES_CATEGORY[0].id,
    author: "",
    quoteName: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    SetQuote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // console.log(option);
  const AddQuote = async (event) => {
    event.preventDefault();
    try {
      await axiosQuoteURL.post(`/quotes.json`, quote);
    } finally {
      props.history.push("/");
    }
  };

  return (
    <div>
      <NewQuote
        add={AddQuote}
        quoteName={quote.quoteName}
        author={quote.author}
        change={handleChange}
        defValue={quote.category}
      />
    </div>
  );
};

export default AddQuote;
