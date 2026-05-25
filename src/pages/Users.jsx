import { useEffect, useState } from "react";

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

  useEffect(() => {
    getUsers();
  }, []);

  return <div>Users</div>;
};

export default Users;
