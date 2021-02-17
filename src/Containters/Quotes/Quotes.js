import React, { useEffect, useState } from "react";
import { QUOTES_CATEGORY } from "../../QuotesCategory";
import "./Quotes.css";
import axiosQuoteURL from "../../axiosQuoteURL";
import DisplayQuote from "../../Components/UI/DisplayQuote/DisplayQuote";
import { NavLink } from "react-router-dom";
const Quotes = (props) => {
  const [quoteList, setQuoteList] = useState([]);

  console.log(props.match.params.name);
  useEffect(() => {
    const getAllQuotes = async () => {
      let url = "/quotes.json";
      if (props.match.params.name) {
        url += `/?orderBy="category"&equalTo="${props.match.params.name}"`;
      }

      const response = await axiosQuoteURL.get(url);
      const fetchedData = [];
      if (response.data !== null) {
        for (let key in response.data) {
          fetchedData.unshift({
            ...response.data[key],
            id: key,
          });
        }
        setQuoteList(fetchedData);
      }
    };
    getAllQuotes().catch(console.error);
  }, [props.match.params.name]);

  // const getQuotesByCategory = async (categoryId) => {
  //   const quotesResponse = await axiosQuoteURL.get(
  //     `/quotes.json?orderBy="category"&equalTo="${categoryId}"`
  //   );
  //   const categoryData = [];
  //   if (quotesResponse.data !== null) {
  //     for (let key in quotesResponse.data) {
  //       categoryData.unshift({
  //         ...quotesResponse.data[key],
  //         id: key,
  //       });
  //     }
  //     setQuoteList(categoryData);
  //   }
  // };

  const selectCategory = QUOTES_CATEGORY.map((category) => {
    return (
      <li
        key={category.id}
        className="selectCategoryButton"
        // onClick={() => getQuotesByCategory(category.id)}
      >
        <NavLink to={"/category/" + category.id}>{category.categName}</NavLink>
      </li>
    );
  });

  const deleteQuote = async (id) => {
    // const copyState = { ...quoteList };
    try {
      await axiosQuoteURL.delete(`/quotes/${id}.json`).then((res) => {
        console.log(res);
      });
    } finally {
      console.log("vse good");
      props.history.push("/");
    }
  };
  return (
    <>
      <div className="QuoteList">
        <ul>
          <li style={{ fontSize: "25px" }} className="selectCategoryButton">
            <NavLink to="/">All</NavLink>
          </li>
          {selectCategory}
        </ul>
        {quoteList.map((elem) => {
          return (
            <DisplayQuote
              key={elem.id}
              quoteCategory={elem.category}
              quoteName={elem.quoteName}
              quoteAuthor={elem.author}
              editQuote={() => props.history.push(`/edit-quote/${elem.id}`)}
              deleteQuote={() => deleteQuote(elem.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Quotes;
