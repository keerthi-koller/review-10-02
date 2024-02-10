import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import { Provider } from 'react-redux';
import appstore from './utils/store/appstore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Component1 />
  },
  {
    path: '/editOrdelete',
    element: <Component2 />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={appstore}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
