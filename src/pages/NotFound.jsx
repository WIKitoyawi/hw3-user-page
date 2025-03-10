import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4">Страница не найдена</p>
      <Link 
        to="/users" 
        className="mt-4 text-blue-500 hover:underline"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
