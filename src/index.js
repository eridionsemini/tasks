import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./redux";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const container = document.getElementById('root');
const root = createRoot(container);

const persistedStore = persistStore(store);

const NewApp = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <App/>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    )
}

root.render(<NewApp/>)
