import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3001/");
        const data = await response.json();
        setUsers(data.users);
        console.log(users);
      } catch (err) {
        console.log("Something went wrong. ", err);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {users.map((user) => {
            <li key={user.name}>
              {user.name} {user.lastname}
            </li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
