import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import reducer from './reducers/reducers'


import {composeWithDevTools} from 'redux-devtools-extension'




const store = createStore(reducer, 
    composeWithDevTools(applyMiddleware(logger, thunk)));


store.subscribe(() => {console.log("Stooooooooore",store.getState())})
// store.dispatch(fetchMembers);



export default store;