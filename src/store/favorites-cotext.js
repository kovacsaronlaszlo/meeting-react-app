import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: arg => {},
    removeFavorite: arg => {},
    itemIsFavorite: arg => {},
});

export const FavoritesContextProvider = props => {

    const [userFavorites, setUserFavorites] = useState([])
    
    const addFavoriteHandler = favMeetup => {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.concat(favMeetup);
        });
    }

    const removeFavoriteHandler = meetupID => {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(item => item.id !== meetupID);
        });
    }

    const itemIsFavoriteHandler = meetupID => {
        return userFavorites.some(item => item.id === meetupID);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
