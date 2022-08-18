import {configureStore, combineReducers} from "@reduxjs/toolkit";
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import taskReducer from './tasks';

const persistConfig = {
    key: 'root',
    storage: storageSession,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({
    tasks: taskReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

