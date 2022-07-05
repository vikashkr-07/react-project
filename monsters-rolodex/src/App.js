import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  console.log(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="card-list">
      <h1 className="monster-title">Monsters Rolodex</h1>
      <input
        type="search"
        placeholder="search monster"
        onChange={onSearchChange}
      />

      {filteredMonsters.map((monster) => {
        const { id, name, email } = monster;

        return (
            <div className="card-container">
              <img
                alt="monsters"
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
        );
      })}
    </div>
  );
}

export default App;
