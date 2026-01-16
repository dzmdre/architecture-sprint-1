import React from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ProfileInfo from "./ProfileInfo";

function Profilemf({ currentUser, onUpdateCurrentUser, isEditAvatarPopupOpen, isEditProfilePopupOpen, updateEditAvatarPopupOpen, updateEditProfilePopupOpen, updateAddPlacePopupOpen, closeAllPopups }) {

    function handleUpdateAvatar(avatarUpdate) {
        api
            .setUserAvatar(avatarUpdate)
            .then((newUserData) => {
                onUpdateCurrentUser(newUserData);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    function handleUpdateUser(userUpdate) {
        api
            .setUserInfo(userUpdate)
            .then((newUserData) => {
                onUpdateCurrentUser(newUserData);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <ProfileInfo currentUser={currentUser} onEditProfile={updateEditProfilePopupOpen(true)} onAddPlace={updateAddPlacePopupOpen(true)} onEditAvatar={updateEditAvatarPopupOpen(true)} />
                <EditProfilePopup
                    currentUser={currentUser}
                    isOpen={isEditProfilePopupOpen}
                    onUpdateUser={handleUpdateUser}
                    onClose={closeAllPopups}
                />
                <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да" />
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onUpdateAvatar={handleUpdateAvatar}
                    onClose={closeAllPopups}
                />
                </>
    );
}

export default Profilemf;
