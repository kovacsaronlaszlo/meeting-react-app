import { useContext } from 'react';

import { FavoritesContext } from '../store/favorites-cotext';
import { MeetupList } from '../components/meetups/index';

const FavoritesPage = () => {
    const favoriteCtx = useContext(FavoritesContext);

    return (
        <section>
            <h1>My Favorites</h1>
            {
                favoriteCtx.totalFavorites === 0 
                    ? <p>Dont have favorites. Add some!</p>
                    :  <MeetupList meetups={favoriteCtx.favorites} />
            }
        </section>
    )
}

export default FavoritesPage;