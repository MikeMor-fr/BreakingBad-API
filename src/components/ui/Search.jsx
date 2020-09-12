import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={text}
          onChange={(event) => onChange(event.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
