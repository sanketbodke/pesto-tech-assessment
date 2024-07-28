import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from "./style/GlobalStyles.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles />
                <App />
            </QueryClientProvider>
        </PersistGate>
    </Provider>
  </React.StrictMode>
)
