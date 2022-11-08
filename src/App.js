import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routers/Routes';

function App() {
  return (
    <div data-theme="aqua">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
