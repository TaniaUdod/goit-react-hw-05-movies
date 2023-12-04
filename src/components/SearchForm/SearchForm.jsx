import { Notify } from 'notiflix';
import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      Notify.warning(`Enter your request! Please, try again.`);
      return;
    }

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
        placeholder="Search movies"
      />
      <button type="submit">Search 🔍</button>
    </form>
  );
};

export default SearchForm;
