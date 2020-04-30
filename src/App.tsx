import React from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routes/routes';
interface AppProps{
  history: History;
}

function App(AppProps:AppProps) {
  return (
    <ConnectedRouter history={AppProps.history} >
      {routes}
    </ConnectedRouter>
  );
}

export default App;
