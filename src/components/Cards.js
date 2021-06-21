import React from 'react';
import Card from './Card';

function Cards({ companies }) {
  return (
    <div className='cards'>
      {companies.map((company) => (
        <Card key={company.id} {...company} />
      ))}
    </div>
  );
}

export default Cards;
