import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-4 bg-blue-400 text-white flex justify-between items-center">
      <div className="font-bold text-lg">MyApp</div>
      <nav>
        <Link to="/users" className="mr-4 hover:underline">
          Пользователи
        </Link>
      </nav>
    </header>
  );
}

export default Header;
