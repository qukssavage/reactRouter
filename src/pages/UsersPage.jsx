import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UsersPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const getUser = async () => {
    try {
      let res = await fetch(`https://dummyjson.com/users/${id}`);
      if (!res.ok) return navigate("/not-found-user");
      let data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const date = (date) => {
    if (!date) return "Не правильный формат даты";
    else return new Date(date).toLocaleDateString();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="users__item">
      <p>{user.firstName}</p>
      <p>{user.email}</p>
      <p>{date(user.birthDate)}</p>
    </div>
  );
};

export default UsersPage;
