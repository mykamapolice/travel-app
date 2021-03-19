import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';



const store: Store<any, any> = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)));



export default store;
