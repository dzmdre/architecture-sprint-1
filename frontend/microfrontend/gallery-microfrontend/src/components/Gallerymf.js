import React from "react";

const ProfileInfo = React.lazy(() => import("@app/profile"));

function Gallerymf({cards, onCardClick, onCardLike, onCardDelete, currentUser}) {

  return (
      <main className="content">
        <Suspense fallback={null}>
          <ProfileInfo currentUser={currentUser} />
        </Suspense>
        <Cards cards={cards} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} currentUser={currentUser}/>
      </main>
  );
}

export default Gallerymf;
