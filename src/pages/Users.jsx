import { useEffect, useState } from "react";
import { Link } from "react-router";

const Users = () => {
  const [users, setUsers] = useState(null);
  const getUsers = async () => {
    try {
      let res = await fetch("https://dummyjson.com/users");
      let { users } = await res.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  const date = (date) => {
    if (!date) return "Не правильный формат даты";
    else return new Date(date).toLocaleDateString();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users">
      {users?.map((user) => (
        <Link to={"/users/" + user.id}>
          <div className="users__item" key={user.id}>
            <p>{user.firstName}</p>
            <p>{user.email}</p>
            <p>{date(user.birthDate)}</p>
          </div>
        </Link>
      )) ?? <h1>Пользователей нет</h1>}
    </div>
  );
};

export default Users;
