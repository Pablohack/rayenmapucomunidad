import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { rootReducer } from './store'

export const history = createBrowserHistory();

export default function configureStore(preloadedState?: any)  {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  );
}