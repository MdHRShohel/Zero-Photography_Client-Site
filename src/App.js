import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routers/Routes';
import "react-photo-view/dist/react-photo-view.css";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div data-theme="aqua">
      <RouterProvider router={routes}></RouterProvider>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
