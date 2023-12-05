import { Notify } from 'notiflix';
import React, { useState } from 'react';
import { Button, Form, Input, Wrapper } from './SearchForm.styled';

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
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movies"
        />
        <Button type="submit">Search 🔍</Button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
