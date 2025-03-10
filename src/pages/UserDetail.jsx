import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) return <div className="container mx-auto p-4">Загрузка...</div>;

  return (
    <div className="container mx-auto p-4">
      <Link 
        to="/users" 
        className="text-blue-500 hover:underline text-sm mb-4 inline-block"
      >
        Назад к списку
      </Link>
      <div className="border p-4 rounded">
        <h2 className="text-xl font-medium mb-2">
          {user.name.firstname} {user.name.lastname}
        </h2>
        <p>
          <strong>Адрес:</strong> {user.address.street} {user.address.number}, {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          <strong>Телефон:</strong> {user.phone}
        </p>
        <p>
          <strong>Геолокация:</strong> {user.address.geolocation.lat}, {user.address.geolocation.long}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Пароль:</strong> {showPassword ? user.password : "••••••"}
          <button 
            onClick={() => setShowPassword(!showPassword)} 
            className="ml-2 text-blue-500 hover:underline text-sm"
          >
            {showPassword ? "Скрыть" : "Показать"}
          </button>
        </p>
      </div>
      <div className="border p-4 rounded mt-4">
        <h3 className="text-lg font-medium mb-2">Карта геолокации</h3>
        <p><strong>Широта:</strong> {user.address.geolocation.lat}</p>
        <p><strong>Долгота:</strong> {user.address.geolocation.long}</p>
      </div>
    </div>
  );
}

export default UserDetail;
