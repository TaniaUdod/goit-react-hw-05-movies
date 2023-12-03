import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleInputChange}
        autoComplete="off"
        // autoFocus
        // placeholder="Search images and photos"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
