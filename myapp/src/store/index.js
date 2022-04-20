import { createStore, combineReducers, applyMiddleware } from "redux";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";
//import createSagaMiddleware from "@redux-saga/core";
//import mySaga from "./sagas";
import {persistStore, persistReducer} from "redux-persist";
import { compose } from "@mui/system";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import gistsReducer from "./gists/reducer";


//const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage

}

const reducers = combineReducers( {
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    gists: gistsReducer
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk)));

const persistore = persistStore(store);

export default persistore;

//sagaMiddleware.run(mySaga);