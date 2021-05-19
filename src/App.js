import { Route, Switch } from 'react-router-dom';

import {
  AllMeetUpsPage,
  NewMeetupPage,
  FavoritesPage,
} from './pages/index';
import { Layout } from './components/layout/index';

function App() {
  return <div>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetUpsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  </div>;
}

export default App;