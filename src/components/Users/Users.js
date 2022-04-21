import axios from "axios";
import { useEffect, useState } from "react";

export const Users = () => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3001/users");
    const data = await res.data;
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  );
};
