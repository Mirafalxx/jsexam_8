import React, { useEffect, useState } from "react";
import EditQuote from "../../Components/EditQuote/EditQuote";
import axiosQuoteURL from "../../axiosQuoteURL";

const Edit = (props) => {
  const [editedQuote, setEditedQuote] = useState({
    quoteName: "",
    author: "",
    category: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedQuote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleEditQuote = async (event) => {
    event.preventDefault();
    try {
      await axiosQuoteURL.put(
        `/quotes/${props.match.params.id}.json`,
        editedQuote
      );
    } finally {
      props.history.push("/");
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axiosQuoteURL.get(
        `/quotes/${props.match.params.id}.json`
      );
      setEditedQuote(response.data);
    };
    getData().catch(console.error);
  }, [props.match.params.id]);
  return (
    <div>
      <EditQuote
        quoteName={editedQuote.quoteName}
        author={editedQuote.author}
        change={handleChange}
        edit={handleEditQuote}
        defValue={editedQuote.category}
        // val={editedQuote.category}
      />
    </div>
  );
};

export default Edit;
