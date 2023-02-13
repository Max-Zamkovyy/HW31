import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/userCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <div>
        {users.map((user) => (
          <UserCard
            userId={user.id}
            userName={user.name}
            userSurname={user.username}
            phone={user.phone}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
