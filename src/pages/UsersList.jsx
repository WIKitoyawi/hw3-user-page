import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map(user => (
        <div 
          key={user.id} 
          className="border p-4 rounded hover:shadow transition"
        >
          <img 
            src={`https://i.pravatar.cc/150?img=${user.id}`} 
            alt="avatar" 
            className="rounded-full w-20 h-20 mx-auto"
          />
          <h2 className="text-lg font-medium text-center mt-2">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-center text-sm">{user.email}</p>
          <p className="text-center text-sm">
            {user.address.city}, {user.address.street}
          </p>
          <div className="text-center mt-2">
            <Link 
              to={`/users/${user.id}`} 
              className="text-blue-500 hover:underline text-sm"
            >
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
