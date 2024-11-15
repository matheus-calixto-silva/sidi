import { Route, Routes } from 'react-router-dom';
import Start from '../../views/pages/Start/Start';
import { routes } from './routes';

const StartRoutes = () => (
  <Routes>
    <Route path={routes.start} element={<Start />} />
  </Routes>
);

export default StartRoutes;
