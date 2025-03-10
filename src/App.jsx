import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import UsersList from './pages/UsersList';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
