import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from "./style/GlobalStyles.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <App />
      </QueryClientProvider>
  </React.StrictMode>
)
