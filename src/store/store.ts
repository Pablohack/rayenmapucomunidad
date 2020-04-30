import { combineReducers } from "redux";
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';


//#endregion

export interface ApplicationState {
    router: RouterState,
    // Add others States
}

export const rootReducer = (history: History) => combineReducers<ApplicationState>({
    router: connectRouter(history)
    // Add others Reducers
});
