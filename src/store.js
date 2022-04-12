import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos } from "./todos/reducers";

const reducers = {
	todos,
};

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: autoMergeLevel2,
};

//this put the reducers into the form so that we can pass them to the create store function that we imported

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer); // object tells redux to where to save and store app data

export const configureStore = () =>
	createStore(
		persistedReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
