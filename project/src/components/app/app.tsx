import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../pages/private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Offer} from '../../types/offer';

type AppProps = {
  offers: Offer[];
  offersCount: number;
}

function App({offers, offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers = {offers} offersCount = {offersCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Property}
          element={<Property />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
