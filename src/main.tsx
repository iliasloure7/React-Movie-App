import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import CarouselProvider from './context/CarouselProvider/CarouselProvider.tsx';
import TrailerProvider from './context/TrailerProvider/TrailerProvider.tsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CarouselProvider>
          <TrailerProvider>
            <App />
          </TrailerProvider>
        </CarouselProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
