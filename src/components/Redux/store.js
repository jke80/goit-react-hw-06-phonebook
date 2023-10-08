import { configureStore } from '@reduxjs/toolkit'
// import contactsSlice from './contacts.slice';
// import filterSlice from './filter.slice';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
 
import {rootReducer} from './reducers'
 

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({ reducer:persistedReducer });

export const persistor = persistStore(store);