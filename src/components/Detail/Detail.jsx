import { Route, Switch } from 'react-router-dom';
import { ClientDetail } from '../../pages/templates/ClientDetail';
import { LightController } from '../Light/LightController';

export const Detail = ({ data }) => {
  return (
    <div className="detail__container">
      <Switch>
        {/* Create a separate component for each client*/}
        {data.map((client, index) => (
          <Route path={`/${client.id}`} key={index}>
            <ClientDetail data={client} />
          </Route>
        ))}
        {/* Light controller */}
        <Route path="/light">
          <LightController />
        </Route>
      </Switch>
    </div>
  );
};
