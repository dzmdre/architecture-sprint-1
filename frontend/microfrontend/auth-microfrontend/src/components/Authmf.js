import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";

const Gallerymf = React.lazy(() => import("@app/gallery"));

export default function Authmf({
                                    cards,
                                    onEditProfile,
                                    onAddPlace,
                                    onEditAvatar,
                                    onCardClick,
                                    onCardLike,
                                    onCardDelete,
                                    isLoggedIn,
                                    isInfoToolTipOpen,
                                    closeAllPopups,
                                    tooltipStatus,
                                  }) {

    function onRegister({ email, password }) {
        auth
            .register(email, password)
            .then((res) => {
                setTooltipStatus("success");
                setIsInfoToolTipOpen(true);
                history.push("/signin");
            })
            .catch((err) => {
                setTooltipStatus("fail");
                setIsInfoToolTipOpen(true);
            });
    }

    function onLogin({ email, password }) {
        auth
            .login(email, password)
            .then((res) => {
                setIsLoggedIn(true);
                setEmail(email);
                history.push("/");
            })
            .catch((err) => {
                setTooltipStatus("fail");
                setIsInfoToolTipOpen(true);
            });
    }

  return (
      <>
        <Switch>
          <ProtectedRoute exact path="/"
                          component={Gallerymf}
                          cards={cards}
                          onEditProfile={onEditProfile}
                          onAddPlace={onAddPlace}
                          onEditAvatar={onEditAvatar}
                          onCardClick={onCardClick}
                          onCardLike={onCardLike}
                          onCardDelete={onCardDelete}
                          loggedIn={isLoggedIn}
          />
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="/signin">
            <Login onLogin={onLogin} />
          </Route>
        </Switch>
        <InfoTooltip isOpen={isInfoToolTipOpen}
                     onClose={closeAllPopups}
                     status={tooltipStatus}
        />
      </>
  );
}

export default Authmf;
