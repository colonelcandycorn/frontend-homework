import React, {useEffect, useState} from 'react';
import './style.css';
import Error from './Error.jsx';
import Root from './Root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import List from './List.jsx';
import { Population } from './Population.jsx'
import { GDP } from './GDP.jsx'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://cs464p564-frontend-api.vercel.app/api/countries'
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCountries()
  }, []);


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/list',
      element: <List isLoading={isLoading} isError={isError} countries={countries} />,
    },
    {
      path: '/population',
      element: <Population  isLoading={isLoading} isError={isError} countries={countries} />,
    },
    {
      path: '/gdp',
      element: <GDP isLoading={isLoading} isError={isError} countries={countries} />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
