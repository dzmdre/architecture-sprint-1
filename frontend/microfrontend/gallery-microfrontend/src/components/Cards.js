import React from 'react';
import Card from './Card';

function Cards({cards, onCardClick, onCardLike, onCardDelete, currentUser}) {

  return (
      <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
              <Card
                  key={card._id}
                  card={card}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                  currentUser={currentUser}
              />
          ))}
        </ul>
      </section>
  );
}

export default Cards;
