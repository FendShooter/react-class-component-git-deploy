import React from 'react';

function SearchField({ changeHandler }) {
  return (
    <div>
      <form>
        <div className='form__group'>
          <label htmlFor=''>Search: </label>
          <input
            type='search'
            className='form__control'
            onChange={changeHandler}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchField;
