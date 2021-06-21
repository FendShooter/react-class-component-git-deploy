import React from 'react';

function Card({ name, company, email, phone, website }) {
  return (
    <div className='card'>
      <h2 className='card__title'>{company?.name}</h2>
      <p>{company?.catchPhrase}</p>
      <h3 className='card-ceo'>Ceo: {name}</h3>
      <div className='card__info'>
        <span>Email: {email}</span>
        <span>Phone: {phone}</span>
        <span>
          <a href={website}>Website</a>
        </span>
      </div>
    </div>
  );
}

export default Card;
